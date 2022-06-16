import {Link, useNavigate} from 'react-router-dom'
function Header({setUser}){
  let nav = useNavigate();
          
  async function handleLogout () {
    let req = await fetch('/logout', {
        method: "DELETE"
    })
    setUser(null)
    nav("/");
}
return(
  <header className='header'>
    <Link to="/dashboard">Home</Link>
    <button onClick={() => {handleLogout()}}>logout</button>
  </header>
)

}

export default Header