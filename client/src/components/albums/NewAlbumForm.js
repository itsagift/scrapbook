import {useState, useEffect} from 'react';
function NewAlbumForm({setState, state}){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if(state.editing) {
      fetch(`/albums/${state.newAlbum.id}`)
      .then(response => response.json())
      .then(album => console.log(album))
    }
  }, [])

  


  function handleSubmit () {
    if (!state.editing){
      fetch(`/albums`, {
        method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ title: title, description: description})
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(album => {
        
        setState({
        newAlbum: album, 
        count: state.count + 1 
      })})
      .catch((error) => console.log(error))
    }
    else{
      fetch(`/albums/${state.newAlbum.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title: title, description: description})
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(album => setState({
        newAlbum: album, 
        count: state.count + 1 
      }))
      .catch((error) => console.log(error))
    }
    
    }
  
return(
  <>
  <h1>New Album</h1>
    <form className="new-album-test" onSubmit={(e) => {
    e.preventDefault();
    handleSubmit()
  }}>
      <input className="new-album-input" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" value={title} required></input>
      <input className="new-album-input" type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" value={description} onInvalid={(e) => alert(e.target.value)} required></input>
      <input type="submit" className="modal-button modal-button-nav modal-button-right" value="next"></input>
    </form>
  </>
)
}

export default NewAlbumForm