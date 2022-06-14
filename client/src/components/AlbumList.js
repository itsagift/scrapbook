import {useState, useEffect} from 'react';
import { DirectUpload } from 'activestorage';

function AlbumList(){
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  const [card, setCard] = useState({})

  
  async function handleSubmit () {
    let req = await fetch('/cards', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ description: description})
    })
    let res = await req.json()
    if (req.ok) {
      console.log("success", res)
      uploadFile(image, res)
    }
    else {
      console.log(res.error)
    }
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
        .then(result => setCard(result))
      }
    })
  }


return(
  <div>
<form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit()
    }}>
  <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
  <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
  <input type="submit" value="submit test"></input>
</form>
<img src={card.card_image_url} />
</div>
)
}
export default AlbumList