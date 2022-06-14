import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {Link, NavLink, Outlet, Routes, Route} from 'react-router-dom';

function LoginScreen ({setUser}){
  return(
    <div className='login-screen-container'>
    <div className='login-screen'>
      Logo goes here
    <div className='login-links'>
    <NavLink
        className={({ isActive }) => (isActive ? 'login-link login-link--active' : 'login-link')}
        exact
        to="/login"
      >Login</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'login-link login-link--active' : 'login-link')}
        to="/signup"
      >Signup</NavLink>
    </div>
    
    <Routes>
      <Route exact path="/login" element={<LoginForm setUser={setUser}/>} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
    
    </div>
    </div>
  )
  }

  export default LoginScreen