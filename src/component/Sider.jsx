
import style from '../style/Sider.module.css'
import Img from '../assets/madhav.jpeg'
import { Link } from 'react-router-dom';
const Sider = ({ CallbackFunction }) => {
    const handleLink = () => {
        CallbackFunction()
    }
    return (
        <div className={style.profile_container}>
            <div className={style.profile_section}>
                <h1 className={style.closeIcon} onClick={() => CallbackFunction()}>X</h1>
                <div className={style.profile_image}>
                    <img src={Img} />
                </div>
                <h5 className={style.pName}>Madhav Jadhav </h5> 
            </div>

            <div className={style.nav_items}>
                <Link to='/' onClick={handleLink} className={style.nav_item} > Home</Link>
                <Link to='' onClick={handleLink} className={style.nav_item} >Profile</Link>
                <Link to='/message' onClick={handleLink} className={style.nav_item} >Message</Link>
                <Link onClick={handleLink} className={style.nav_item} >Notifications</Link>
            </div>

        </div>
    );
}

export default Sider;
