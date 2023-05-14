import { useNavigate } from 'react-router-dom';
import cardImg from '../assets/1.png'
import style from '../style/Header.module.css'
import { useContext } from 'react';
import { MyContext } from '../App';


const Header = ({ CallbackFunction }) => {
    const Navigate = useNavigate() 
    const contextData = useContext(MyContext)
    const { addToCart } = contextData
    return (
        <div className={style.home_header} style={{ height: '100%', display: 'flex' }}>
            <div className={style.hamburger_icon} onClick={() => CallbackFunction()}>
                <h1></h1>
                <h1></h1>
                <h1></h1>

            </div>
            <h3>Welcome XXXXXX </h3>
            <div className={style.cartSection} onClick={() => Navigate('/view_cart')}>
                <h6 className={style.cart_count}>{addToCart?.length}</h6>
                <img src={cardImg} className={style.cart_image} />
            </div>
        </div>

    );
}

export default Header;
