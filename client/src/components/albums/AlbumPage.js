import { useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import Masonry from 'react-masonry-css';
import 'react-edit-text/dist/index.css';
import { EditText, EditTextarea } from 'react-edit-text';

function AlbumPage(){
  let { id } = useParams();

  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1
  };
  
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    function fetchAlbum(){
      fetch(`/albums/${id}`)
      .then(response => response.json())
      .then(result => setAlbum(result));
    }
    fetchAlbum();
    
  }, []);
  let albumCards = album.album_cards;

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


  return(
    <div className='album-page-container'>
      <EditText
        name='textbox-title'
        value={album.title}
        onChange={(e) => handleTitleChange(e, setAlbum)}
        onSave={handleSave}
        style={{padding: 0, "font-size": "48px", }}
      />
      <EditTextarea
        name='textbox-title'
        value={album.description}
        onChange={(e) => handleDescChange(e, setAlbum)}
        onSave={handleSave}
        style={{padding: 0, "font-size": "24px", "font-family": "Georgia"}}
      />
      <Link to="/new-card">
        <button>Add New Image</button>
      </Link>
      {!loading ? (
        <>
      
      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="album-page-grid"
      columnClassName="album-page-column">
      {albumCards.map((card)=> {
        return (
          <div>
          <img src={card.card.image_url}></img>
          </div>
        )
      })}
      </Masonry>
      </>
      ) :
      (
        <div>
          Loading
        </div>
      )}
      
    </div>
  )
}
export default AlbumPage