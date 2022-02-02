import React from 'react';
import '../mainPage/MainPage.scss'
import logo from '../../Assests/logo.png'
import UserDetails from '../../components/userDetails/UserDetails';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';

function MainPage() {

    const [update, setUpdate] = React.useState(true)

    const register = () => {
        setUpdate(!update)
    }

    return (
        <div className='mainPageContainer'>
            <div className='midBackground'>
                <img className="mainLogo" src={logo} alt="this is logo"></img>
                <p className='logoname'>online book shopping</p>
                <div className='loginSignin'>
                    {/* <Login /> */}
                    <span className='directLogin' onClick={register}>
                        LOGIN
                    </span>
                    <span className='directSignup' onClick={register} >
                        SIGNUP
                    </span>
                </div>
                <div className='loginSignupContainer'>
                    {update ? <Login /> : <Signup />}
                </div>
            </div>
        </div>
    )
}

export default MainPage;