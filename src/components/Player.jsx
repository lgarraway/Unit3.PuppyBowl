import React from "react";
import { useNavigate } from "react-router-dom";

export default function Player({ player }) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/players/${id}`)
    }

    return (
        <div>
            <h4>{player.name}</h4>
            <button onClick={() => {
                handleClick(player.id);
                }}>See Details</button>
        </div>
    )
}