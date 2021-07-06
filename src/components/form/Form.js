// import { useState } from 'react'
import FormCreate from "../form-create/FormCreate";
// import FormList from "../form-list/FormList";
import React from 'react';
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { deleteData } from '../actions';
import { useDispatch } from 'react-redux';

const InputForm =() => {
    const formReducer = useSelector(state => state.FormReducer)
    const dispatch = useDispatch()
    console.log(formReducer);
    // const [getForms, setForms] = useState([

    // ])

    const eventCreateForm = (forms) => {
        // setForms(getForms.concat(forms))
        // setPosts.push(post)
    }

    // const eventDeleteItem = (id) => {
    //     const deletedItems = [...getForms].filter((items) => items.id !== id);
    //     setForms(deletedItems)
    // }

    return (
        <div>
            <h1>Item Bazaar Input Form</h1>
            <FormCreate onCreateForm={eventCreateForm} />
            <Table hover responsive className="App-table">
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Expired Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        formReducer.map((forms)=> {
                            //HOW CAN I PASS THIS MF(eventdelete) BELOW TO OTHER COMPONENT??????????
                            return <tr key={forms.id}>
                                        <td>{forms.id}</td>
                                        <td>{forms.name}</td>
                                        <td>{forms.stock}</td>
                                        <td>{forms.description}</td>
                                        <td>{forms.expiredDate}</td>
                                        <td>
                                            {/* <Button color="danger" onClick={() => eventDeleteItem(forms.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />&nbsp;Remove
                                            </Button> */}

                                            <Button color="danger" onClick={() => dispatch(deleteData(forms.id))}>
                                                <FontAwesomeIcon icon={faTrashAlt} />&nbsp;Remove
                                            </Button>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
                {/* <FormList dataForms={getForms} /> */}
            </Table>
        </div>
        // <div>
        //     <h3>Post</h3>
        //     <PostnoteCreate onCreatePostnote={eventCreatePostnote} />
        //     <PostnoteList dataPostnotes={getPostnotes} />
        // </div>
    )
}

export default InputForm;