
import '../style/FooterMenu.css'
import { useNavigate } from 'react-router-dom';

const Header = ({ header }) => {
    const Navigate = useNavigate()
    const handleBack = () => {
        Navigate(-1)
    }
    return (
        <div>
            <h5 className='cart-header'>
                <button className="cart-back-icon" onClick={handleBack}>&#x2190;</button>
                {header}</h5>
        </div>
    );
}

export default Header;
