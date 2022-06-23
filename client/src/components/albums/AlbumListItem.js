import {Link} from 'react-router-dom'
function AlbumListItem({album, setAlbums}){
  function deleteAlbum(album){
    fetch(`/albums/${album.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    setAlbums(prevState => prevState.filter((prevAlbum) => prevAlbum.id !== album.id))
  }

  return(
    <Link to={`/album/${album.id}`}>
    <div className='list-item album-list-item'>
      
      <div class="album-list-item-text">
        
          <div className="album-list-item-title">{album.title}</div>
       
      </div>
    
    </div>
    </Link>
  )
}

export default AlbumListItem