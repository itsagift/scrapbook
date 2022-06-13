import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import {Link, NavLink, Routes, Route} from 'react-router-dom';

function LoginScreen ({setUser}){
  return(
    <div className='login-screen-container'>
    <div className='login-screen'>
    <div className='login-links'>
    <NavLink
        className={({ isActive }) => (isActive ? 'login-link login-link--active' : 'login-link')}
        exact
        to="/"
      >Login</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'login-link login-link--active' : 'login-link')}
        exact
        to="/signup"
      >Signup</NavLink>
    </div>
    
    <Routes>
      <Route exact path="/" element={<LoginForm setUser={setUser}/>} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
    
    </div>
    </div>
  )
  }

  export default LoginScreen