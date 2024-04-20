import { useState, React,  useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPlayer, handleDelete } from '../API/ajaxHelpers';

export default function SinglePlayer() {
    const params = useParams();

    const [isDeleted, setIsDeleted] = useState(false)
    const [player, setPlayer] = useState([])
    useEffect(() => {
        fetchPlayer( params.playerId, { setPlayer } )
    },[])

    const navigate = useNavigate();
    return ( 
        <>
            <h1>{player.name}</h1>
            <h2>{player.breed}</h2>
            <h2>{player.status}</h2>
            <button onClick={() => 
                handleDelete(params.playerId, {setIsDeleted})
                }>Delete Player</button>
            {isDeleted && 
                navigate('/')}
        </>
    )
}