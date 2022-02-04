import '../login/Login.scss'
import React from 'react';
import { Link } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import { uLogin } from '../../services/userSevice';

function Login() {
    const email = /santoshwalker719@gmail.com/;
    const password = /santosh@W23/;
    const [update, setUpdate] = React.useState({
        email: ' ', password: ' '
    })
    const [emailHelperText, setEmailHelperText] = React.useState("")
    const [passwordHelperText, setPasswordHelperText] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);


    const changeEmail = (e) => {
        setUpdate({ ...update, email: e.target.value })
    }

    const changePassword = (e) => {
        setUpdate({ ...update, password: e.target.value })
    }

    const submit = () => {
        console.log("is it working")
        if (email.test(update.email)) {
            console.log("If working")
            setEmailError(false);
            setEmailHelperText(" ");
        } else {
            console.log("Error")
            setEmailError(true);
            setEmailHelperText("Enter an email")
        }
        if (password.test(update.password)) {
            setPasswordError(false);
            setPasswordHelperText(" ")
        } else {
            setPasswordError(true);
            setPasswordHelperText("Enter a Password")
        }
        uLogin(update).then((res) => {
            console.log(res)

        }).catch((err) => {
            console.log(err)

        })
    }


    return (
        <div className='login'>
            <TextField style={{ backgroundColor: 'white' }} className="emailInput" type='text' id="outlined-email" label="Email Id" variant="outlined"
                onChange={changeEmail} error={emailError} helperText={emailHelperText} />
            <TextField style={{ backgroundColor: 'white' }} className="passInput" type='password' id="outlined-password" label="Password" variant="outlined"
                onChange={changePassword} error={passwordError} helperText={passwordHelperText} />
            <br></br>
            <Link to="/homepage"> <Button className='loginButton' style={{ backgroundColor: '#A03037' }} onClick={submit} > Login </Button> </Link>
            <p className='midBar'>OR</p>

            <div className='twoButton'>
                <Button className='fbButton' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='googleButton' variant="contained">Google</Button>
            </div>

        </div>
    );
}

export default Login;