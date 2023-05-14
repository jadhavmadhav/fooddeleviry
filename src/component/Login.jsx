

import '../style/Login.css'
import BottomButton from './buttons/BottomButton';
import { useContext } from 'react';
import { MyContext } from '../App';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const contextData = useContext(MyContext)
    const { setUserAuth } = contextData

    const Navigate = useNavigate()

    const ClickFunction = () => {
        setUserAuth(true)
        Navigate('/')
    }
    return (
        <>
            <div className='login-container'>
                <h1 className='login-header'>Login</h1>
                <input placeholder='Email Address' className="login-login-field" />
                <input placeholder='Password' className="login-login-field" type='password' />
            </div>
            <BottomButton name="Login" ClickFunction={ClickFunction} />

        </>

    );
}

export default Login;
