import {useEffect, useState} from 'react';

function TimelineHeader(){
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    function fetchAlbums(){
      fetch('/albums')
      .then(response => response.json())
      .then(result => setAlbums(result))
    }
    fetchAlbums();
  }, []);

return(
  <ul className='timeline-header'>
    {
      albums.map((album, i) => {
        return(
          <li>{album.title}</li>
        )
      })
    }
  </ul>
)
}

export default TimelineHeader