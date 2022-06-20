import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
function AlbumPage(){
  let { id } = useParams();

  const [album, setAlbum] = useState({});

  useEffect(() => {
    function fetchAlbum(){
      fetch(`/albums/${id}`)
      .then(response => response.json())
      .then(result => console.log(result));
    }
    fetchAlbum();
  }, []);
  let albumCards = album.album_cards;


  return(
    <div className='album-page-container'>
      <h1>{album.title}</h1>
      <div>{album.description}</div>
      {albumCards.map((card)=> {
        return (
          <img src={card.card.image_url}></img>
        )
      })}
      
    </div>
  )
}
export default AlbumPage