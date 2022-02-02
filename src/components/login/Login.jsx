import '../login/Login.scss'
import React from 'react';
import { Button } from '@material-ui/core';

function Login() {
    return (
        <div className='login'>
            {/* <p className='inLogin'>LOGIN</p><br></br> */}
            <input className='emailInput' type='text' placeholder='Email Id' helpertext='Email Id' ></input> <br></br>
            <input className='passInput' type='password' placeholder='Password' helpertext='password' ></input>
            <br></br>
            <Button className='loginButton' style={{ backgroundColor: '#A03037' }}> Login </Button>
            <p className='midBar'>OR</p>

            <div className='twoButton'>
                <Button className='fbButton' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='googleButton' variant="contained">Google</Button>
            </div>

        </div>
    );
}

export default Login;
