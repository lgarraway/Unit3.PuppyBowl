import {useState, React } from 'react'
import { handleSubmit } from '../API/ajaxHelpers'
import { useNavigate } from 'react-router-dom'

export default function NewPlayerForm() {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    
    const navigate = useNavigate()
    return (
        <>
            <h1>Create Player</h1>
            <form onSubmit={(e) => {
                handleSubmit(e, name, breed)
                navigate('/')
            }}>
                <label>
                    Name: <input value={name} onChange={(e) => setName(e.target.value)} required type="text"/>
                </label>
                <label>
                    Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)} required type="text"/>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}