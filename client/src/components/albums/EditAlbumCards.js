import Masonry from 'react-masonry-css';
import {useEffect, useState} from 'react';

function EditAlbumCards({albumCards, selected, setSelected}){
  const [cards, setCards] = useState([]);

  let cardIds = []
  console.log("albumcards", albumCards)

  function handleCheckboxChange(e){
    if (e.target.checked) {
      if (!selected.includes(e.target.value)) {
        setSelected(prevState => ([...prevState, e.target.value]))
      }
    } else {
      setSelected(prevState => (prevState.filter(prevCard => prevCard.id !== e.target.value)))
    }
  }

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    function fetchCards(){
      fetch(`/cards`)
      .then(response => response.json())
      .then(result => setCards(result))
    }
    fetchCards();
  
}, []);
return(
  <Masonry
    breakpointCols={breakpointColumnsObj}
    className="album-page-grid"
    columnClassName="album-page-column">
    {cards.map((card)=> {
      return (
        <div className='album-card-selection'>
          <label htmlFor={card.id}><img className="album-card-selection-img" src={card.image_url} loading="lazy"></img></label>
          <input type="checkbox" id={card.id} className="album-card-checkbox" value={card.id} onChange={(e) => handleCheckboxChange(e)} defaultChecked={cardIds.includes(card.id)}/>
        </div>
      )
    })}
  </Masonry>
)
}

export default EditAlbumCards