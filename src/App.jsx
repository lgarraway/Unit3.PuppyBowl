import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import './App.css'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllPlayers selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId}/>} />
        <Route path='/players/:playerId' element={<SinglePlayer selectedPlayerId={selectedPlayerId}/>} />
        <Route path='/player/create' element={<NewPlayerForm />} />
      </Routes>
    </>
  )
}

export default App
