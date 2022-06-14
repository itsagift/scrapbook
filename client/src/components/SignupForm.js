import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function SignupForm ({setUser}) {
  let navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

    const handleSignUp = async () => {
        let req = await fetch('/signup', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({username, email, password})
        })
        let res = await req.json();
        if (req.ok) {
          navigate("/", { replace: true });
        }
        else {
          alert(res.errors)
          console.log(res.errors)
        }
    }
    
    return (
    <form className="login-tab-form" onSubmit={(e) => {
        e.preventDefault();
        handleSignUp()
        }}>
        <div class="input-top">
          <input type="text" className="login-form-input" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"></input>
          <input type="email" className="login-form-input" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"></input>
          <input type="password" className="login-form-input" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" autoComplete='off'></input>
        </div>
        <input type="submit" className='form-button' value="Sign Up"></input>
    </form>
    )
}

export default SignupForm;