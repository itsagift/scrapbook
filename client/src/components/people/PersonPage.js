import { useEffect, useState} from 'react';
import {useParams, Link, Route, Routes} from 'react-router-dom';

import 'react-edit-text/dist/index.css';
import { EditText, EditTextarea } from 'react-edit-text';

import PersonCards from './PersonCards';
import Modal from '../Modal'
import CardView from '../cards/CardView';

function PersonPage(){
  let { id } = useParams();

  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    function fetchAlbum(){
      fetch(`/people/${id}`)
      .then(response => response.json())
      .then(result => setPerson(result));
    }
    fetchAlbum();
    
  }, []);

  return(
    <div className='album-page-container'>
      <div className='person-header'>
        <img className='person-header-img' src={person.image_url}/>
        <h1 className='person-name'>{person.name}</h1>
      </div>
      {!loading ? (
        <PersonCards personCards={person.cards}/>
      ) :
      (
        <div>
          Loading
        </div>
      )}
    <Routes>
    
    <Route path=":id" element={
      <Modal>
        <CardView/>
      </Modal>
      } 
    />
    </Routes>
    </div>
  )
}
export default PersonPage