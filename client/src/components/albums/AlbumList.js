import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'

import AlbumListItem from './AlbumListItem';

function AlbumList({albums, setAlbums}){
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
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
  <div className='section-container'>
    <h2>Your Albums</h2>
    {!loading ? (
    <div className='section-list'>
    {
      albums.length > 0 ? (
        <Link to="/dashboard/new-album">
          <div className="album-list-item new-button" data-hover="New Album">
              +
          </div>
        </Link>
      ) : (
      <div className="first-list-item">
        <div className="first-list-item-text">You don't have any albums.</div>
        <Link to="/dashboard/new-album" className='first-list-item-button'>
          Create an album.
        </Link>
      </div>
      )
    }
      {
        albums.map((album, i) => {
          return(
            <AlbumListItem album={album} setAlbums={setAlbums}/>
          )
        })
      }
      </div>
    ) :
    (<div className='album-list'>"loading"</div>)
    }
    
  
  </div>
  
  

)
}
export default AlbumList