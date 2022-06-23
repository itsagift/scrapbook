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
    <div className='list-item album-list-item'>
      <div class="album-list-item-text">
        <Link to={`/album/${album.id}`}>
          <div className="album-list-item-title">{album.title}</div>
        </Link>
      </div>
    <button onClick={() => deleteAlbum(album)}>delete</button>
    </div>
  )
}

export default AlbumListItem