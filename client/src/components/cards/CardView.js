import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'

function CardView({setCards, cards}){
  const [card, setCard] = useState({});
  const [orientation, setOrientation] = useState("");
  const img = useRef(null);
  const [loading, setLoading] = useState(true);

  let {id} = useParams();
  let nav = useNavigate();

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    if (offsetWidth > offsetHeight){
      setOrientation('landscape');
    }
    else if (offsetWidth < offsetHeight) {
      setOrientation('portrait');
    }
    else {
      setOrientation('square');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  // useEffect(() => {
  //   if (loading === false){
  //     if (img.current.naturalWidth > img.current.naturalHeight) {
  //       setOrientation('landscape');
  //       } else if (img.current.width < img.current.height) {
  //       setOrientation('portrait');
  //       } else {
  //       console.log(img.current.width);
  //     }
  //   }
  // }, [loading])

  
  

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
    <div className={`card-view-container ${orientation}`}>
      <img className={loading ? "card-view-img loading-img" : "card-view-img"} id="card-view-img" src={card.image_url} onLoad={onImgLoad} ref={img}/>
      <div className='card-info'>
        <div className='card-info-text'>
          <span className='card-year'>{card.year}</span>
          <span className='card-desc'>{card.description}</span>
        </div>
        <ul className='card-info-tags'>
          {
            !loading && 
            card.tags.map((tag)=> {
              return(
                <li className='card-tag'>{tag.name}</li>
              )
            })
          }
        </ul>
        <button className="card-delete-button" onClick={()=> handleDelete(card)}>Delete</button>
      </div>
      
    </div>
  )
}

export default CardView