import { useState } from 'react'
import NAMES from '../assets/names'

const TextField = () => {
    const [name, setName] = useState('')

    const generateName = () => {
        let numberOfNames = Math.ceil(Math.random() * 10) + 1
        let bjjName = ''
        for (let i = 0; i <= numberOfNames; i++) {
            bjjName += NAMES[Math.floor(Math.random() * NAMES.length)] + ' '
        }
        return `${bjjName.trim()}`
    }

    const handleClick = () => {
        setName(generateName())
    }

    return (
        <>
            <input type='submit' onClick={handleClick}/>
            <p>Your BJJ name is {name}</p>
        </>
    )
}

export default TextField
