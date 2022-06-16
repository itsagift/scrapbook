import AlbumList from "./albums/AlbumList"
import CardList from "./cards/CardList"
import {useState} from 'react'

function Dashboard(){
  
  return(
    <div className="dashboard">
      <AlbumList/>
      <CardList/>
    </div>
  )
}
export default Dashboard