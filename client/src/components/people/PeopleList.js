import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import PersonListItem from './PersonListItem';

function PeopleList(){
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    function fetchTags(){
      fetch('/people')
      .then(response => response.json())
      .then(result => setPeople(result));
    }
    fetchTags();
  }, []);

  if (loading) {
    return null;
  }

return(
  <section className="section-container people-list-container">
    <h2>All People</h2>
    <div className='section-list people-list'>
      {
        people.length > 0 ? (
          <Link to="/dashboard/new-person">
            <div className='person-list-item new-people new-button' data-hover="Add a Person">
              +
            </div>
          </Link>
        ) : (
          <div className="first-list-item">
            <div className="first-list-item-text">You don't have any people saved.</div>
            <Link to="/dashboard/new-person" className='first-list-item-button'>
              Add a person.
            </Link>
          </div>
        )
      }
      {
        (!loading) &&
        people.map((person, i) => {
          return(
            <PersonListItem person={person} setPeople={setPeople}/>
          )
        })
      }
    </div>
  </section>
)
}

export default PeopleList