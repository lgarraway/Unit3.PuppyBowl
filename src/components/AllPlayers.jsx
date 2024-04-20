import {  useState, useEffect, React } from 'react'
import { fetchAllPlayers } from '../API/ajaxHelpers'
import Player from './Player'

export default function AllPlayers({selectedPlayerId, setSelectedPlayerId}) {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetchAllPlayers( setPlayers); 
    },[])

    return (
        <>
            {players.map((player) => {
                    return <Player key={player.id} setSelectedPlayerId={setSelectedPlayerId} player={player} />
                })}
        </>
    )
}