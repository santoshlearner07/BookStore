import '../login/Login.scss'
import React from 'react';
import { Button } from '@material-ui/core';
import { userAxios } from '../../services/userSevice';

function Login() {

    const [update, setUpdate] = React.useState({ email: ' ', password: ' '})

    const changeEmail = (e) => {
        setUpdate({...update,email:e.target.value})
    }

    const changePassword = (e) => {
        setUpdate({...update,password:e.target.value})
    }

    const submit = () =>{

    }


    return (
        <div className='login'>
            <input className='emailInput' type='text' placeholder='Email Id' helpertext='Email Id' onChange={changeEmail}></input> <br></br>
            <input className='passInput' type='password' placeholder='Password' helpertext='password' onChange={changePassword} ></input>
            <br></br>
            <Button className='loginButton' style={{ backgroundColor: '#A03037' }} onClick={submit} > Login </Button>
            <p className='midBar'>OR</p>

            <div className='twoButton'>
                <Button className='fbButton' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='googleButton' variant="contained">Google</Button>
            </div>

        </div>
    );
}

export default Login;
