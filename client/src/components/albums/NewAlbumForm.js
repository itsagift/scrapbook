import {useState} from 'react';
function NewAlbumForm({description, title, setDescription, setTitle, setState, state}){
  function handleSubmit () {
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
    .then(album => setState({
      newAlbum: album, 
      count: state.count + 1 
    }))
    .catch((error) => console.log(error))
    }
  
return(
  <>
  <h1>New Album</h1>
    <form className="new-album-test" onSubmit={(e) => {
    e.preventDefault();
    handleSubmit()
  }}>
      <input className="new-album-input" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" value={title} required></input>
      <input className="new-album-input" type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" value={description} oninvalid={(e) => alert(e.target.value)} required></input>
      <input type="submit" className="slide-button slide-button-nav slide-button-right" value="next"></input>
    </form>
  </>
)
}

export default NewAlbumForm