import {useState, useEffect} from 'react';

import { Routes, Route, Link } from 'react-router-dom'

import AlbumListItem from './AlbumListItem';
import Modal from '../Modal';
import NewAlbum from './NewAlbum';

function AlbumList(){
  const [showModal, setShowModal] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    function fetchAlbums(){
      fetch('/albums')
      .then(response => response.json())
      .then(result => setAlbums(result))
    }
    fetchAlbums();
  }, []);

  let albumHoverText = albums.length > 0 ? "New Album" : "";
  let newAlbumText = albums.length > 0 ? "+" : "New Album";
  let newAlbumClass = albums.length > 0 ? "list-item album-list-item new-button" : "list-item album-list-item new-button--first"

return(
  <div className='album-list-container'>
    <h2>Your Albums</h2>
    <div className='album-list'>
  {
    albums.map((album, i) => {
      return(
        <AlbumListItem album={album} setAlbums={setAlbums}/>
      )
    })
  }
  
    {
      albums.length > 0 ? (
      <div className="list-item album-list-item new-button" data-hover="New Album">
        <Link to="/new-album">
          +
        </Link>
      </div>
      ) : (
      <div className="first-list-item">
        <div class="first-list-item--text">You don't have any albums.</div>
        <Link to="/new-album" className='first-list-item--link'>
          Create an album.
        </Link>
      </div>
      )

    }
  
  </div>
  
  

  <Routes>
    <Route path="/new-album" element={
    <Modal>
      <NewAlbum setAlbums={setAlbums}/>
    </Modal>
    } />
  </Routes>
  </div>
)
}
export default AlbumList