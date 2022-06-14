import {useEffect, useState} from 'react';
import LoginScreen from './LoginScreen';
import Header from './Header';
import AlbumList from './AlbumList';

import {Link, NavLink, Routes, Route, useLocation} from 'react-router-dom';
import '../App.css';

function App() {
  const [user, setUser] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      <AlbumList />
      
    </div>
  );
}

export default App;
