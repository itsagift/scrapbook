import {useState} from 'react';
import { DirectUpload } from 'activestorage';
import NewAlbumSelection from './NewAlbumSelection';
import NewAlbumForm from './NewAlbumForm';

function NewAlbum({setAlbums, albums}){
  const [state, setState] = useState({
    newAlbum: "", 
    count: 0, 
    editing: false
  });
  

  let components = [
    <NewAlbumForm 
      setState={setState}
      state={state}/>,
    <NewAlbumSelection newAlbum={state.newAlbum} setAlbums={setAlbums} albums={albums}/>
  ]

  
  return (
  <div className='new-album'>
    {
      components[state.count]
    }
    {state.count > 0 && <button className="slide-button slide-button-nav slide-button-left" onClick={() => setState({...state, count: state.count - 1, editing: true})}>prev</button>}
    
    
  </div>
  )
}

export default NewAlbum