import { Button } from '@material-ui/core';
import React from 'react';
import '../signup/Signup.scss'


function Signup() {
    return <div>
        <div className='signup'>
            {/* <p className='inLogin'>Sign in</p> */}
            <input className='fullName' type='text' placeholder='Full Name' helpertext='Full Name' ></input> 
            <input className='emailInput' type='email' placeholder='Email Id' helpertext='Email Id' ></input>
            <input className='passwordSignup' type='password' placeholder='Password' helpertext='Password' ></input>
            <input className='numSignup' type='number' placeholder='Number' helpertext='Number' ></input>
           
            <Button className='signupButton' style={{ backgroundColor: '#A03037' }}> SignUp </Button>
        </div>
    </div>;
}

export default Signup;
