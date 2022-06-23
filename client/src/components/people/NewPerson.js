import {useState} from 'react';
import { DirectUpload } from 'activestorage';

function NewPerson({setPeople, person}){
  const [name, setName] = useState("");
  const [image, setImage] = useState({});

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
          console.log(person)
        }
      })
    }
return(
  <div className='new-card'>
  <form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit()
  }}>
  <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
  <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
  <input type="submit" value="submit test"></input>
  </form>
</div>
)
}

export default NewPerson