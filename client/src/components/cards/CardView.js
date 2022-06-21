import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'

function CardView({setCards, cards}){
  const [card, setCard] = useState({});
  const [orientation, setOrientation] = useState("");
  const img = useRef(null);
  const [loading, setLoading] = useState(true);

  let {id} = useParams();
  let nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [])

  useEffect(() => {
    if (loading === false){
      if (img.current.naturalWidth > img.current.naturalHeight) {
        setOrientation('landscape');
        } else if (img.current.width < img.current.height) {
        setOrientation('portrait');
        } else {
        console.log(img.current.width);
      }
    }
  }, [loading])

  
  

  useEffect(() => {
    function fetchCard(){
      fetch(`/cards/${id}`)
      .then(response => response.json())
      .then(result => setCard(result));
    }
    fetchCard();
    
  }, []);

  function handleDelete(card){
    nav(-1);
    fetch(`/cards/${card.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    setCards(prevState => prevState.filter((prevCard) => prevCard.id !== card.id))
  }

  return(
    <div className={`card-view-container`}>
      <img className="card-view-img" id="card-view-img" src={card.image_url} ref={img}/>
      {card.id}
      {orientation}
      <button onClick={()=> handleDelete(card)}>Delete</button>
    </div>
  )
}

export default CardView