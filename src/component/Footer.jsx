

import '../style/Footer.css'
import homeImg from '../assets/2.svg'
import searchImg from '../assets/search.svg'
import profileImg from '../assets/profile.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const Navigate = useNavigate()

    const handleHome = () => {
        Navigate('/')

    }
    const handleSearch = () => {
        Navigate('/search')
    }
    const handleProfile = () => {
        Navigate('/profile')
    }
    return (
        <div className='footer-container'>
            <div className='footer-menu'>
                <img src={homeImg} onClick={handleHome} />
                <img src={searchImg} onClick={handleSearch} />
                <img src={profileImg} onClick={handleProfile} />
            </div>
        </div>
    );
}

export default Footer;
