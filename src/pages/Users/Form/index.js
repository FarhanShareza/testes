import { React, useState } from 'react';
import { Input, Button, Textarea, Gap } from '../../../components';
import Axios from 'axios'

const Form = () => {
    const [formValue, setformValue] = useState({
        fullName: '',
        description: ''
    });
    
    const handleSubmit = async() => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("fullName", formValue.fullName)
    loginFormData.append("description", formValue.description)

    try {
        // make axios post request
        const response = await Axios({
            method: "post",
            url: "https://apiku.topcoatmedan.com/inv/invitation",
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        } catch(error) {
            console.log(error)
        }
    }
    
    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleSubmit} className='box-form-m-t'>
            <Input type="text" value={formValue.fullName} onChange={handleChange} name="fullName" placeholder="Nama Anda" required/>
            <Gap height={25}/>
            <Textarea type="text" value={formValue.description} onChange={handleChange} name="description" placeholder="Berikan Ucapan & Doa" required/>   
            <Gap height={25}/>
            <Button title="Kirim" type="submit"></Button>
            <Gap height={25}/>
        </form> 
    );
}

export default Form;