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
    {album.title}
    {album.description}
    <button onClick={() => deleteAlbum(album)}>delete</button>
    </div>
  )
}

export default AlbumListItem