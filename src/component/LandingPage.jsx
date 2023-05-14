import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.png'


import '../style/Login.css'
import BottomButton from './buttons/BottomButton';
const LandingPage = () => {

    const Navigate = useNavigate()


    const ClickFunction = () => {
        Navigate('/login')
    }
    return (
        <>
            <div className='landing-container'>
                <h1 className='landing-title'>Welcome to<br /> How Fresh</h1>
                <img className='landing-hero' src={heroImg} />
                <h6 className='landing-description'>A cool new way to learn how to cook anything quickly.</h6>
            </div>
            <BottomButton name="Next" ClickFunction={ClickFunction} />
        </>
    );
}


export default LandingPage;
