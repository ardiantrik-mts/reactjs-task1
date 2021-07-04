import './Post.css'
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

    const eventDeletePostnote = (postnote) => {
        const indexDel = getPostnotes.findIndex(post => post.id == postnote.id);
        // setPostnotes(getPostnotes.concat(postnote))
        // setPosts.push(post)
    }

    return (
        <div>
            <h3>Post</h3>
            <PostnoteCreate onCreatePostnote={eventCreatePostnote} />
            <PostnoteList dataPostnotes={getPostnotes} />
        </div>
    )
}

export default Postnote;