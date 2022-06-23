import {useState, useEffect} from 'react';

import CardListItem from './CardListItem';
import Modal from '../Modal';
import NewCard from './NewCard';

import { Routes, Route, Link } from 'react-router-dom';

function CardList({cards, setCards}){
  const [showModal, setShowModal] = useState(false);
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    function fetchCards(){
      fetch('/cards')
      .then(response => response.json())
      .then(result => setCards(result));
    }
    fetchCards();
  }, []);

  let cardHoverText = cards.length > 0 ? "New Card" : "";
  let newCardText = cards.length > 0 ? "+" : "New Card";
  let newCardClass = cards.length > 0 ? "card-list-item new-button" : "card-list-item new-button-first"

  if (loading) {
    return null;
  }


return(

  <div className='section-container'>
    <h2>All Photo Cards</h2>
    <div className='section-list'>
    <Link to="/dashboard/new-card">
      <div className={newCardClass} data-hover={cardHoverText}>
        +
      </div>
    </Link>
    
    {
      (!loading) &&
      cards.map((card) => {
        return(
          <CardListItem card={card} setCards={setCards}/>
        )
      })
    }
    
  </div>

  </div>
)
}
export default CardList