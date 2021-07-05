import React, { useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const LoginForm = (props) => {

    const [getLogin, setLogin] = useState({ 
        username:'',
        password: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            username : getLogin.username,
            password: getLogin.password
        }

        console.log(data);

        axios.post(`login/`, data )
        .then(res => {
          console.log(res);
          console.log(res.data);

          localStorage.setItem('token', res.data.results);
        })
        .catch(err =>{
            console.log(err);
        })


        // const newInputForm = {
        //     id: Math.floor(Math.random() * 100) + 1,
        //     name: getInputForm.name,
        //     stock: getInputForm.stock,
        //     description: getInputForm.description,
        //     expiredDate: getInputForm.expiredDate
        // }

        // props.onCreateForm(newInputForm)  
        // setInputForm({
        //     name:'',
        //     stock: '',
        //     description: '',
        //     expiredDate: ''
        // })
        // // setInputForm('')

        // console.log(newInputForm);
    }

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="inputUN" className="mr-sm-2">Username</Label>
        <Input type="text" name="username" id="inputUN" placeholder="something@idk.cool"
        onChange={(e) => setLogin({ ...getLogin, username:e.target.value })}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="inputPWD" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="inputPWD" placeholder="don't tell!" 
        onChange={(e) => setLogin({ ...getLogin, password:e.target.value })}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default LoginForm;
