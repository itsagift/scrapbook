import {useState} from 'react';
import { DirectUpload } from 'activestorage';

function NewCard({setCards, cards}){
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  
  function handleSubmit () {
    fetch(`/cards`, {
      method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ description: description})
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
        .then(card => console.log(card))
        console.log(cards)
      }
    })
  }
return(
  <form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit()
  }}>
<input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
<input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
<input type="submit" value="submit test"></input>
</form>
)
}

export default NewCard