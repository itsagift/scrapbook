import {useEffect, useState} from 'react';

function LoginForm({setUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    let req = await fetch('/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ username: username, password: password })
    })
    let res = await req.json()
    if (req.ok) {
      setUser(res.username)
    }
    else {
      alert(res.error)
    }
  }

  return(
    <form autoComplete="off" className="login-tab-form" action="/login" method="POST" onSubmit={(e) => {
      e.preventDefault();
      handleLogin()
    }}>
      <div class="input-top">
        <input type="text" className="login-form-input" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" autoComplete='off'></input>
        <input type="password" className="login-form-input" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" autoComplete='off'></input>
      </div>
      <input type="submit" className='form-button' value="Login"></input>
    </form>
  )
}

export default LoginForm