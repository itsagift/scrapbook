import {useState} from 'react';
import { DirectUpload } from 'activestorage';
import { Navigate, useNavigate } from 'react-router-dom';

function NewPerson({setPeople, person}){
  const [name, setName] = useState("");
  const [image, setImage] = useState({});
  let nav = useNavigate();

  function handleSubmit () {
    fetch(`/people`, {
      method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name: name})
    })
    .then(response => response.json())
    .then(result => uploadFile(image, result))
    .catch((error) => {
      console.error('Error:', error);
    })
    }

    function uploadFile(file, person){
      const upload = new DirectUpload(file, '/rails/active_storage/direct_uploads')
      upload.create((error, blob) => {
        if (error){
          console.log(error)
        }
        else{
          fetch(`/people/${person.id}`, {
            method: 'PATCH', 
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({person_image: blob.signed_id})
          })
          .then(response => response.json())
          .then(person => setPeople(prevState => [...prevState, person]))
          nav(-1);
        }
      })
    }
return(
  <div className='new-card'>
  <form className="new-form" onSubmit={(e) => {
    e.preventDefault();
    handleSubmit()
  }}>
  <h4>Enter the person's name: </h4>
  <input className="new-input" type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
  <h4>Upload an image: </h4>
  <input className="new-input" type="file" onChange={(e) => setImage(e.target.files[0])}></input>
  <input className="button submit-button" type="submit" value="submit test"></input>
  </form>
</div>
)
}

export default NewPerson