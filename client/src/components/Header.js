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
    <Link to="/" exact><h1 className='header-logo'>Carousel</h1></Link>
    <nav className='header-links'>
      <div className='header-link'><Link to="/" exact>Home</Link></div>
      <button className="button header-button" onClick={() => {handleLogout()}}>logout</button>
    </nav>
  </header>
)

}

export default Header