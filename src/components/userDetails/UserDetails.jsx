import React from 'react';
import '../userDetails/UserDetails.scss'

const login = true;

function UserDetails() {
    return (
        <div className='userPage'>
            {
                login ? (
                    <div className='login'>
                        <p className='inLogin' onClick={login} >LOGIN</p><br></br>
                        <input className='emailInput' type='text' placeholder='Email Id' helpertext='Email Id' fullwidth></input>
                        <input className='emailInput' type='password' placeholder='password' helpertext='password' fullwidth></input>
                        <br></br>
                        <button className='loginButton'> Login </button>
                    </div>
                ) : (
                    <div className='signin'>
                        <p className='inLogin'>Sign in</p>
                        <input className='emailInput' type='text' placeholder='Email Id' helpertext='Email Id' fullwidth></input> <br></br>
                        <input className='emailInput' type='password' placeholder='password' helpertext='password' fullwidth></input><br></br>
                        <input className='emailInput' type='text' placeholder='Email Id' helpertext='Email Id' fullwidth></input><br></br>
                        <input className='emailInput' type='password' placeholder='password' helpertext='password' fullwidth></input><br></br>
                        <br></br>
                        <button className='loginButton'> Signin </button>
                    </div>
                )
            }
        </div>
    )
}

export default UserDetails;
