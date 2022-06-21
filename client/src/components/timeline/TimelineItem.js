import {useState} from 'react';
function TimelineItem({card, setCardExpanded, cardExpanded, d}){
  const [cardSelected, setCardSelected] = useState(false);


 

  function handleItemClick(card){
    
    if (cardExpanded.selected.id){
      setCardExpanded({isExpanded: !cardExpanded.isExpanded, selected: {}, year: card.year})
    }
    else{
      setCardExpanded({isExpanded: !cardExpanded.isExpanded, selected: card})
    }
  }
  return(
    <div className={cardExpanded.selected.id === card.id ? "timeline-item-expanded" : cardExpanded.selected.year === card.year && cardExpanded.selected.id != card.id ? "timeline-item-special" : "timeline-item"} onClick={()=> handleItemClick(card)}>
      <img className={cardExpanded? "tl-image-expanded" : "tl-image"} src={card.url}></img>
      {
        cardExpanded.selected.id === card.id &&
        <div>
          {card.description}
        </div>
      }
    </div>
  )
}

export default TimelineItem