import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'

function LoginForm({setUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = async () => {
    let req = await fetch('/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ username: username, password: password })
    })
    let res = await req.json()
    if (req.ok) {
      setUser(res.username)
      navigate('/');
    }
    else {
      alert(res.error)
    }
  }

  return(
    <form autocomplete="off" className="login-tab-form" action="/login" method="POST" onSubmit={(e) => {
      e.preventDefault();
      handleLogin()
    }}>
      <div class="input-top">
        <input type="text" className="login-form-input" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" autoComplete='off'></input>
        <input type="password" className="login-form-input" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" autoComplete='off'></input>
      </div>
      <input type="submit" className='button login-button' value="Login"></input>
    </form>
  )
}

export default LoginForm