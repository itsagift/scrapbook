import { useEffect, useState} from 'react';
import {useParams, Link, Route, Routes} from 'react-router-dom';

import 'react-edit-text/dist/index.css';
import { EditText, EditTextarea } from 'react-edit-text';

import AlbumCards from './AlbumCards';
import Modal from '../Modal'
import AlbumCardSelection from './AlbumCardSelection';
import CardView from '../cards/CardView';

function AlbumPage(){
  let { id } = useParams();

  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [editing, setEditing] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    function fetchAlbum(){
      fetch(`/albums/${id}`)
      .then(response => response.json())
      .then(result => setAlbum(result));
    }
    fetchAlbum();
    
  }, []);

  function handleTitleChange (e) {
    setAlbum({...album, title: e.target.value});
  };
  function handleDescChange (e) {
    setAlbum({...album, description: e.target.value});
  };

  function handleSave ({ value, previousValue }) {
    fetch(`/albums/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ title: album.title, description: album.description})
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then((test) => console.log(test))
    .catch((error) => console.log(error))
  };

  function handleButton(){
    fetch(`/album_cards_cards`, {
      method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ data: selected, album_id: album.id})
    })
    .then(response => response.json())
    .then(json => setAlbum(json))
    .catch((error) => {
      console.error('Error:', error);
    })
    setEditing(!editing)
  }


  return(
    <div className='album-page-container'>
      <div className='album-page-header'>
      <EditText
        name='textbox-title'
        value={album.title}
        onChange={(e) => handleTitleChange(e, setAlbum)}
        onSave={handleSave}
        style={{padding: 0, "font-size": "48px", "width": "50%"}}
      />
      <EditTextarea
        name='textbox-title'
        value={album.description}
        onChange={(e) => handleDescChange(e, setAlbum)}
        onSave={handleSave}
        style={{padding: 0, "font-size": "24px", "font-family": "Georgia", "width": "30%"}}
      />
      </div>
      <Link to="new">
      <button>Add Images</button>
      </Link>
      {!loading ? (
        <AlbumCards albumCards={album.album_cards}/>
      ) :
      (
        <div>
          Loading
        </div>
      )}
    <Routes>
    <Route path="new" element={
      <Modal>
        <AlbumCardSelection album={album} setAlbum={setAlbum}/>
      </Modal>
      } 
    />
    <Route path=":id" element={
      <Modal>
        <CardView/>
      </Modal>
      } 
    />
    </Routes>
    </div>
  )
}
export default AlbumPage