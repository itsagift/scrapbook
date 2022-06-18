import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';

function NewAlbumSelection({newAlbum}){
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
    if (e.target.checked) {
      if (!cards.includes(e.target.value)) {
        setCards(prevState => ([...prevState, e.target.value]))
      }
    } else {
      setCards(prevState => (prevState.filter(prevCard => prevCard.id !== e.target.value)))
    }
  }

  let navigate = useNavigate();
  function handleClose(){
    navigate(-1);
  }
return(
  <>
    <h1>Select Images</h1>
    <form>
    <div className='album-card-selection-grid'>
      {
        cards.map((card)=> {
          if (card.image_url){
            return(
              <div className='album-card-selection'>
              <label for={card.id}><img className="album-card-selection-img" src={card.image_url} loading="lazy"></img></label>
              <input type="checkbox" id={card.id} class="album-card-checkbox" value={card.id} onChange={(e) => handleCheckboxChange(e)} />
              
              </div>
            )
          }
        })
      }
    </div>
    </form>
    <button className="slide-button slide-button-right slide-button-done" onClick={()=> handleClose()}>Done</button>
  </>
)
}

export default NewAlbumSelection