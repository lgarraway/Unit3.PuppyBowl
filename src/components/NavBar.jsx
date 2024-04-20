import React from 'react'
import {Link}  from "react-router-dom"

export default function NavBar() {
    return (
        <>
            <Link to='/'>To Home</Link>
            <Link to='/player/create'>To Create Player</Link>
        </>
    )
}