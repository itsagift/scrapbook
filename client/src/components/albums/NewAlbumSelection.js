import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';

function NewAlbumSelection({newAlbum, setAlbums, albums}){
  const [selected, setSelected] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
      function fetchCards(){
        fetch(`/cards`)
        .then(response => response.json())
        .then(result => setCards(result))
      }
      fetchCards();
    
  }, []);

  function handleCheckboxChange(e){
    if (!selected.includes(e.target.value)){
      setSelected(prevState => ([...prevState, e.target.value]))
    }
    else {
      setSelected(prevState => (prevState.filter(prevCard => prevCard !== e.target.value)))
    } 
  }

  let navigate = useNavigate();

  function handleClose(){
      fetch(`/album_cards`, {
        method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ data: selected, album_id: newAlbum.id})
      })
      .then(response => response.json())
      .then(json => console.log("album response", json))
      .catch((error) => {
        console.error('Error:', error);
      })
    setAlbums(prevState => [...prevState, newAlbum])
    navigate(-1)
    
  }
return(
  <>
    <h1>Select Images</h1>
    <form onSubmit={(e) => {
    e.preventDefault();
    handleClose()}}>
    <div className='album-card-selection-grid'>
      {
        cards.map((card)=> {
          if (card.image_url){
            return(
              <div className='album-card-selection'>
              <label htmlFor={card.id}><img className="album-card-selection-img" src={card.image_url} loading="lazy"></img></label>
              <input type="checkbox" id={card.id} className="album-card-checkbox" value={card.id} onChange={(e) => handleCheckboxChange(e)} />
              
              </div>
            )
          }
        })
      }
    </div>
    <input className="modal-button modal-button-right modal-button-done" type="submit" value="Done"></input>
    </form>
    
    
  </>
)
}

export default NewAlbumSelection