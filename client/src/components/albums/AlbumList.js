import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'

import AlbumListItem from './AlbumListItem';

function AlbumList({albums, setAlbums}){
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    function fetchAlbums(){
      fetch('/albums')
      .then(response => response.json())
      .then(result => setAlbums(result))
    }
    fetchAlbums();
  }, []);

return(
  <div className='album-list-container'>
    <h2>Your Albums</h2>
    <div className='album-list'>
  {
    !loading ? (
      <>
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
        <Link to="/dashboard/new-album">
          +
        </Link>
      </div>
      ) : (
      <div className="first-list-item">
        <div className="first-list-item-text">You don't have any albums.</div>
        <Link to="/dashboard/new-album" className='first-list-item-button'>
          Create an album.
        </Link>
      </div>
      )
    }
      </>
    ) :
    ("loading")
  }
    
  
  </div>
  
  

  
  </div>
)
}
export default AlbumList