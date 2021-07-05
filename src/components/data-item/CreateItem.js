import { useState } from 'react'
import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CreateItem = (props) => {
    const [getInputForm, setInputForm] = useState({ 
        name:'',
        stock: '',
        description: '',
        expiredDate: '',
        carrotRate: '',
        image:''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const newInputForm = {
            name: getInputForm.name,
            stock: getInputForm.stock,
            description: getInputForm.description,
            expiredDate: getInputForm.expiredDate,
            carrotRate: getInputForm.carrotRate
        }

        axios.post(`http://127.0.0.1:8080/api/item/`, newInputForm )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        props.onCreateForm(newInputForm)  
        setInputForm({
            name:'',
            stock: '',
            description: '',
            expiredDate: '',
            carrotRate: '',
            image: ''
        })
        // setInputForm('')

        console.log(newInputForm);
    }

    // const handleInputForm = (event) => {
    //     setInputForm(event.target.value)
    // }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="itemName">Item Name</Label>
                <Input
                type="text"
                name="name"
                id="itemName"
                placeholder="Type the item name here" 
                value={getInputForm.name}
                onChange={(e) => setInputForm({ ...getInputForm, name:e.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <Label for="itemStock">Stock</Label>
                <Input
                type="number"
                name="stock"
                id="itemStock"
                min="0"
                placeholder="Add the item stock here"
                value={getInputForm.stock}
                onChange={(e) => setInputForm({ ...getInputForm, stock:e.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <Label for="itemDescription">Description</Label>
                <Input
                type="textarea"
                name="description"
                id="itemDescription"
                value={getInputForm.description}
                onChange={(e) => setInputForm({ ...getInputForm, description:e.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <Label for="itemExpiredDate">Expired Date</Label>
                <Input
                type="date"
                name="expiredDate"
                id="itemExpiredDate"
                placeholder="date placeholder"
                value={getInputForm.expiredDate}
                onChange={(e) => setInputForm({ ...getInputForm, expiredDate:e.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <Label for="itemRate">Carrot Rate</Label>
                <Input
                type="number"
                name="carrotRate"
                id="itemRate"
                min="0"
                placeholder="Add the item stock here"
                value={getInputForm.carrotRate}
                onChange={(e) => setInputForm({ ...getInputForm, carrotRate:e.target.value })}
                />
            </FormGroup>
            {/* <FormGroup>
                <Label for="itemImage">Image</Label>
                <Input type="file" name="file" id="itemImage" />
            </FormGroup> */}
            <br/>
            <Button color="primary" type="submit"><FontAwesomeIcon icon={faPlus} />&nbsp;Submit</Button>
        </Form>
        // <form className="postnote-form" onSubmit={handleSubmit}>
        //     <input type="text" value={getInputPostnote} onChange={handleInputPostnote} />
        //     <button type="submit">Add</button>
        // </form>
    )
}

export default CreateItem;