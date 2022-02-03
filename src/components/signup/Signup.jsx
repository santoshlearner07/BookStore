import { Button } from '@material-ui/core';
import React from 'react';
import '../signup/Signup.scss'
import { registration } from '../../services/userSevice';

function Signup() {

    const [update, setUpdate] = React.useState({ fullName: ' ', email: ' ', password: ' ', phone: ' ' })

    const changeName = (e) => {
        setUpdate({...update,fullName:e.target.value})
    }
    const changeEmail = (e) => {
        setUpdate({...update,email:e.target.value})
    }
    const changePassword = (e) => {
        setUpdate({...update,password:e.target.value})
    }
    const changeNumber = (e) => {
        setUpdate({...update,phone:e.target.value})
    }

    const submit = () => {
        registration(update).then((res)=>{
            console.log(res)
            
        }).catch((err)=>{
            console.log(err)
            
        })
    }

    return <div>
        <div className='signup'>
            <input className='fullName' type='text' placeholder='Full Name' helpertext='Full Name' onChange={changeName}></input>
            <input className='emailInput' type='email' placeholder='Email Id' helpertext='Email Id' onChange={changeEmail}></input>
            <input className='passwordSignup' type='password' placeholder='Password' helpertext='Password' onChange={changePassword}></input>
            <input className='numSignup' type='number' placeholder='Number' helpertext='Number' onChange={changeNumber}></input>

            <Button className='signupButton' style={{ backgroundColor: '#A03037' }} onClick={submit} > SignUp </Button>
        </div>
    </div>;
}

export default Signup;
