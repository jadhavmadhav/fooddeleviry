
import { useLocation, useNavigate } from 'react-router-dom';
import BottomButton from '../component/buttons/BottomButton';
import style from '../style/CheckOut.module.css'
import { useState } from 'react';
const CheckOut = () => {
    const [formData, setFormData] = useState()
    
const Navigate = useNavigate()
    const data = useLocation()
    const { GSTTotal, GrandTotal, Subtotal } = data?.state

    const handleForm = (event) => {
        event.persist()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handlePlaceOrder = () => {
         Navigate('/payment',{state:{GrandTotal}})


    }
    return (
        <div className={style.container}>
            <div className={style.form}>
                <div>
                    <input className={style.input} placeholder='First Name' name='firstName' onChange={handleForm} />
                </div>
                <div>
                    <input className={style.input} placeholder='Last Name' name='lastName' onChange={handleForm} />
                </div>
                <div>
                    <input className={style.input} placeholder='Mobile Number' name='mobile' onChange={handleForm} />
                </div>
                <div>
                    <input className={style.input} placeholder='Area' name='area' onChange={handleForm} />
                </div>
                <div>
                    <input className={style.input} placeholder='City' name='city' onChange={handleForm} />
                </div>
                <div>
                    <input className={style.input} placeholder='Pin Code' name='pinCode' onChange={handleForm} />
                </div>




            </div>
            <div className='cart-placeOrderSection'>
                <div className='cart-calculations-fields'>
                    <h6>Subtotal:</h6>
                    <h6>&#x20B9;{Subtotal.toFixed(2)}</h6>
                    <h6>Taxes:</h6>
                    <h6>&#x20B9;{GSTTotal.toFixed(2)}</h6>
                </div>
                <div className='cart-calculation-total-field'>
                    <h6>total:</h6>
                    <h6>&#x20B9;{GrandTotal.toFixed(2)}</h6>
                </div>
                <BottomButton name="Place Order" ClickFunction={handlePlaceOrder} />
            </div>

        </div>
    );
}

export default CheckOut;
