import { useState } from 'react'
import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const FormCreate = (props) => {
    const [getInputForm, setInputForm] = useState({ 
        name:'',
        stock: '',
        description: '',
        expiredDate: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const newInputForm = {
            id: Math.floor(Math.random() * 100) + 1,
            name: getInputForm.name,
            stock: getInputForm.stock,
            description: getInputForm.description,
            expiredDate: getInputForm.expiredDate
        }

        props.onCreateForm(newInputForm)  
        setInputForm({
            name:'',
            stock: '',
            description: '',
            expiredDate: ''
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
            <br/>
            <Button color="primary" type="submit">Submit</Button>
        </Form>
        // <form className="postnote-form" onSubmit={handleSubmit}>
        //     <input type="text" value={getInputPostnote} onChange={handleInputPostnote} />
        //     <button type="submit">Add</button>
        // </form>
    )
}

export default FormCreate;