import {useEffect, useLayoutEffect, useState} from 'react';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AlbumPage from './components/albums/AlbumPage';
import TimelineContainer from './components/timeline/TimelineContainer';
import PersonPage from './components/people/PersonPage'

import {Routes, Route} from 'react-router-dom';

import './App.css';

import Modal from './components/Modal';
import AlbumCardSelection from './components/albums/AlbumCardSelection';

function App() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true)

  
  

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

      <Routes>
        <Route path="/" exact element={<Dashboard/>}/>
        <Route path="/dashboard/*" exact element={<Dashboard/>}/>
        <Route path="/album/*" element={<AlbumPage />}/>
        <Route path="/album/:id" element={<AlbumPage />}/>
        <Route path="/album/:id/*" element={<AlbumPage />}/>
        <Route path="/timeline/:id" element={<TimelineContainer />}/>
        <Route path="/person/:id" element={<PersonPage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
