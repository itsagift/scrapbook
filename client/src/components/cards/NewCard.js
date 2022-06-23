import {useState} from 'react';
import { DirectUpload } from 'activestorage';

function NewCard({setCards, cards}){
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  const [year, setYear] = useState("");
  
  function handleSubmit () {
    fetch(`/cards`, {
      method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ description: description, year: year})
    })
    .then(response => response.json())
    .then(result => uploadFile(image, result))
    .catch((error) => {
      console.error('Error:', error);
    })
    }
  
  function uploadFile(file, card){
    const upload = new DirectUpload(file, '/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
      if (error){
        console.log(error)
      }
      else{
        fetch(`/cards/${card.id}`, {
          method: 'PATCH', 
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({card_image: blob.signed_id})
        })
        .then(response => response.json())
        .then(card => setCards(prevState => [...prevState, card]))
        console.log(cards)
      }
    })
  }
return(
  <div className='new-card'>
  <form className='new-form' onSubmit={(e) => {
    e.preventDefault();
    handleSubmit()
  }}>
  <h4>Enter a card description</h4>
  <input className="new-input" type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} value={description}></input>
  <h4>Enter the year it was taken.</h4>
  <input className="new-input" type="text" placeholder="year" onChange={(e) => setYear(e.target.value)} value={year}></input>
  <h4>Upload an image: </h4>
  <input className="new-input" type="file" onChange={(e) => setImage(e.target.files[0])}></input>
  <input className="button submit-button" type="submit" value="submit test"></input>
  </form>
</div>
)
}

export default NewCard