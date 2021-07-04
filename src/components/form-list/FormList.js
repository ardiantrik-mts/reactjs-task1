import React from 'react';
import InputForm from "../form/Form";
// import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FormList = (props) => {
    // console.log(props);
    return (
        <tbody>
            {
                props.dataForms.map((forms)=> {
                    return <tr key={forms.id} onClick={InputForm.eventDeleteItem(forms.id)}>
                                <td>{forms.id}</td>
                                <td>{forms.name}</td>
                                <td>{forms.stock}</td>
                                <td>{forms.description}</td>
                                <td>{forms.expiredDate}</td>
                            </tr>
                })
            }
        </tbody>
    )
}

export default FormList;