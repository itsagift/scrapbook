function CardListItem({card, setCards}){
  
  function deleteCard(card){
    fetch(`/cards/${card.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    setCards(prevState => prevState.filter((prevCard) => prevCard.id != card.id))
  }
  return(
    <div>
      {card.description}
      <button onClick={() => deleteCard(card)}>delete</button>
    </div>
  )
}

export default CardListItem