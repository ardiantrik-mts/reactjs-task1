import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import CreateItem from "./CreateItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const FetchItem = () => {
    const [getItems, setItems] = useState([

    ])
    // console.log(props);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/item/`)
            .then(res => {
                const items = res.data.results;
                // console.log(items);
                setItems(items)
            })
            // fetch('127.0.0.1:8080/api/item/')
            // .then(res => res.json())
            // .then(json => setItems(json))
    },['http://127.0.0.1:3000/fetchItem'])

    const eventCreateForm = (forms) => {
        // setForms(getForms.concat(forms))
        // setPosts.push(post)
    }

    const eventDeleteItem = (id) => {
        console.log(id);
        axios.delete(`http://127.0.0.1:8080/api/item/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div>
            <CreateItem onCreateForm={eventCreateForm} />
            <Table hover responsive className="App-table">
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Expired Date</th>
                    <th>Carrot Rate</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        getItems.map((items)=> {
                            // return <pre>{JSON.stringify(items)}</pre>
                            let expDate = items.expiredDate
                            expDate = expDate.split("T")
                            return <tr key={items._id}>
                                        <td>{items._id}</td>
                                        <td>{items.name}</td>
                                        <td>{items.stock}</td>
                                        <td>{items.description}</td>
                                        <td>{expDate[0]}</td>
                                        <td>{items.carrotRate}</td>
                                        <td>
                                            <Button color="danger" onClick={() => eventDeleteItem(items._id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />&nbsp;Remove
                                            </Button>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
              
            </Table>
        </div>


        // <div>
        //     {
        //         getItems.map((item)=> {
        //             return <pre>{JSON.stringify(item)}</pre>
        //         })
        //     }
        // </div>
        
    )
}

export default FetchItem;