import {useState, useEffect} from 'react';

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

return(
  <div className='album-list-container'>
    <h2>Your Albums</h2>
    <div className='album-list'>
  {
    albums.map((album, i) => {
      return(
        <AlbumListItem title={album.title} description={album.description}/>
      )
    })
  }
  <div className='album-list-item new-button' onClick={()=> setShowModal(true)} data-hover={albumHoverText}>{newAlbumText}</div>
  </div>
  
  <Modal showModal={showModal} setShowModal={setShowModal}>
    <NewAlbum setAlbums={setAlbums}/>
  </Modal>

  </div>
)
}
export default AlbumList