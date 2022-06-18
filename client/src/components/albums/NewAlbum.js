import {useState} from 'react';
import { DirectUpload } from 'activestorage';
import NewAlbumSelection from './NewAlbumSelection';
import NewAlbumForm from './NewAlbumForm';

function NewAlbum(){
  const [state, setState] = useState({
    newAlbum: "", 
    count: 0
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let components = [
    <NewAlbumForm 
      setTitle={setTitle} 
      setDescription={setDescription} 
      title={title} 
      description={description}
      setState={setState}
      state={state}/>,
    <NewAlbumSelection newAlbum={state.newAlbum}/>
  ]
  
  

  
  return (
  <div className='new-album'>
    {
      components[state.count]
    }
    {state.count > 0 && <button className="slide-button slide-button-nav slide-button-left" onClick={() => setState({...state, count: state.count - 1})}>prev</button>}
    
    
  </div>
  )
}

export default NewAlbum