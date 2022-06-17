import { Link } from 'react-router-dom';

function CardListItem({card, setCards}){
  
  function deleteCard(card){
    fetch(`/cards/${card.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    setCards(prevState => prevState.filter((prevCard) => prevCard.id != card.id))
  }
  return(
    <div className="card-list-item">
      {card.image_url &&
      <Link to={`/img/${card.id}`}>
        <img className="card-image" src={card.image_url} loading="lazy"></img>
      </Link>
      }
      {/* <button onClick={() => deleteCard(card)}>delete</button> */}
    </div>
  )
}

export default CardListItem