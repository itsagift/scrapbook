import { Link } from "react-router-dom"
function PersonListItem({person, setPeople}){
  function deletePerson(person){
    fetch(`/people/${person.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    setPeople(prevState => prevState.filter((prevPerson) => prevPerson.id !== person.id))
  }
return(
  <div className="person-list-item">
    <div class="person-list-item-content">
        <Link to={`/person/${person.id}`}>
          <img className="person-image" src={person.image_url} loading="lazy"></img>
        </Link>
        <div className="person-list-item-caption">
          <div className="person-list-item-title">{person.name}</div>
          <button onClick={() => deletePerson(person)}>delete</button>
        </div>
      </div>
  </div>
)
}

export default PersonListItem