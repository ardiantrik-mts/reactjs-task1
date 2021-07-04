import './PostnoteList.css';

const PostnoteList = (props) => {
    // console.log(props);
    return (
        <ul>
            {
                props.dataPostnotes.map((postnote)=> {
                    return <li key={postnote.id}>{postnote.title}</li>
                })
            }
        </ul>
    )
}

export default PostnoteList;