import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function AlbumCardSelection({album, setAlbum}){
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);

  let cardIds = []
  
  album.album_cards.forEach((albumCard)=> {
    cardIds.push(albumCard.card.id)
  })

  let navigate = useNavigate();
  useEffect(() => {
    function fetchCards(){
      fetch(`/cards`)
      .then(response => response.json())
      .then(result => setCards(result.filter(card => !cardIds.includes(card.id)))
      )
    }
    fetchCards();
    
  
}, []);

function handleCheckboxChange(e, card){
  if (e.target.checked){
    if (selected.includes(e.target.value)){
      console.log("already in", selected)
    }
    setSelected(prevState => [...prevState, card.id])
    console.log("not in", selected)
  }
  else {
    if (selected.includes(e.target.value)){
    setSelected(prevState => (prevState.filter(prevCard => prevCard !== card.id)))
    console.log("removing", e.target.value)
    }
    
  } 
}
function handleSubmit(){
  console.log("selected", selected)
  fetch(`/album_cards_cards`, {
    method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ data: selected, album_id: album.id})
  })
  .then(response => response.json())
  .then(json => setAlbum(json))
  .catch((error) => {
    console.error('Error:', error);
  })
  navigate(-1)

}

  

  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit()}}>
    <div className='album-card-selection-grid'>
    {
      cards.map((card)=> {
        if (card.image_url){
          return(
            <div className='album-card-selection'>
            <label htmlFor={card.id}><img className="album-card-selection-img" src={card.image_url} loading="lazy"></img></label>
            <input type="checkbox" id={card.id} className="album-card-checkbox" value={card.id} onChange={(e) => handleCheckboxChange(e, card)} defaultChecked={cardIds.includes(card.id)}/>
            </div>
          )
        }
      })
    }
    <input className="modal-button modal-button-right modal-button-done" type="submit" value="Done"></input>
    </div>
    </form>
  )
}

export default AlbumCardSelection