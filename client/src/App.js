import {useEffect, useState} from 'react';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState("");
  

  useEffect(() => {
    async function fetchUser(){
      let req = await fetch('/me')
      if (req.ok){
        let res = await req.json();
        if (res.username){
          setUser(res.username)
        }
        else{
          setUser("")
        }
      }
    }
    fetchUser();
  }, []);
    
  if (!user) {
    return <LoginScreen setUser={setUser} />;
  }

  return (
    <div className="App">
      <Header setUser={setUser}/>
      <Dashboard/>
      
      
    </div>
  );
}

export default App;
