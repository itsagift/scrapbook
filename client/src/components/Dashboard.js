import AlbumList from "./albums/AlbumList"
import CardList from "./cards/CardList"
import Modal from "./Modal";
import NewAlbum from "./albums/NewAlbum";
import NewCard from "./cards/NewCard";
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import AlbumPage from "./albums/AlbumPage";
import CardView from "./cards/CardView";


function Dashboard(){
  const [cards, setCards] = useState([]);
  const [albums, setAlbums] = useState([]);
  
  return(
    <div className="dashboard">
      <AlbumList setAlbums={setAlbums} albums={albums}/>
      <CardList setCards={setCards} cards={cards}/>
      
    <Routes>
    <Route path="new-album" element={
      <Modal>
        <NewAlbum setAlbums={setAlbums} cards={cards}/>
      </Modal>
    } />
    <Route path="new-card" element= {
      <Modal>
        <NewCard setCards={setCards} cards={cards}/>
      </Modal>
    }/>
    <Route path="/img/:id" element={
      <Modal >
        <CardView setCards={setCards} cards={cards}/>
      </Modal>
    } />
    </Routes>
    </div>
  )
}
export default Dashboard