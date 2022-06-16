import {useState, useEffect} from 'react';

import CardListItem from './CardListItem';
import Modal from '../Modal';
import NewCard from './NewCard';

function CardList(){
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function fetchCards(){
      fetch('/cards')
      .then(response => response.json())
      .then(result => setCards(result));
    }
    fetchCards();
  }, []);

return(
  <div className='card-list'>
    <h2>All Cards</h2>
  {
    cards.map((card) => {
      return(
        <CardListItem card={card} setCards={setCards}/>
      )
    })
  }
  <button onClick={()=> setShowModal(true)}>New Card</button>
  <Modal showModal={showModal} setShowModal={setShowModal}>
    <NewCard setCards={setCards} cards={cards}/>
  </Modal>

  </div>
)
}
export default CardList