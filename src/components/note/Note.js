import './note.css'
import { useState } from 'react'
import PostnoteList from "../postnote-list/PostnoteList";
import PostnoteCreate from "../postnote-create/PostnoteCreate"

const Postnote =() => {
    const [getPostnotes, setPostnotes] = useState([

    ])

    const eventCreatePostnote = (postnote) => {
        setPostnotes(getPostnotes.concat(postnote))
        // setPosts.push(post)
    }

    return (
        <div>
            <h3>Note</h3>
            <PostnoteCreate onCreatePostnote={eventCreatePostnote} />
            <PostnoteList dataPostnotes={getPostnotes} />
        </div>
    )
}

export default Postnote;