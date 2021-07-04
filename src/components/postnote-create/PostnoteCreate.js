import './PostnoteCreate.css'
import { useState } from 'react'

const PostnoteCreate = (props) => {
    const [getInputPostnote, setInputPostnote] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newPostnote = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputPostnote
        }

        props.onCreatePostnote(newPostnote)  
        setInputPostnote('')

        console.log(newPostnote);
    }

    const handleInputPostnote = (event) => {
        setInputPostnote(event.target.value)
    }

    return (
        <form className="postnote-form" onSubmit={handleSubmit}>
            <input type="text" value={getInputPostnote} onChange={handleInputPostnote} />
            <button type="submit">Add</button>
        </form>
    )
}

export default PostnoteCreate;