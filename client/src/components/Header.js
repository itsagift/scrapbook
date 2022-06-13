import {Link, useNavigate} from 'react-router-dom'
function Header({setUser}){
  let nav = useNavigate();
          
  async function handleLogout () {
    let req = await fetch('/logout', {
        method: "DELETE"
    })
    setUser(null)
    nav("/landing");
}
return(
  <header>
    <Link to="/dashboard">Home</Link>
    <button onClick={() => {handleLogout()}}>logout</button>
  </header>
)

}

export default Header