

import '../style/Cart.css'
import Header from "../component/FooterMenu";
import Img from '../assets/hero.png'
import BottomButton from '../component/buttons/BottomButton';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';

let rowData = [
    {
        id: 1,
        dishName: "Shrimp Scampi",
        desc: "Buttery, flaky pastry named for its crescent shape.",
        quntity: 1,
        price: 120
    },
    {
        id: 2,
        dishName: "Shrimp Scampi",
        desc: "Buttery, flaky pastry named for its crescent shape.",
        quntity: 1,
        price: 180
    }]

const Cart = () => {
    const [Data, setData] = useState([])

    const contextData = useContext(MyContext)
    const { addToCart, setAddToCart } = contextData

    const Navigate = useNavigate()

    let Subtotal = 0;
    let GrandTotal = 0;
    let GSTTotal = 0;


    useEffect(() => {
        setData(rowData)
    }, [])


    const handleCartIncrement = (cart_Id) => {
        setAddToCart(pre =>
            pre?.map((item) =>
                cart_Id === item.id ? { ...item, quntity: item.quntity + 1 } : item
            )
        )
    }


    const handleCartDecrement = (cart_Id) => {
        setAddToCart(pre =>
            pre?.map((item) =>
                cart_Id === item.id ? { ...item, quntity: item.quntity - (item.quntity > 1 ? 1 : 0) } : item
            )
        )
    }

    const handleCheckout = () => {
        Navigate('/checkout', { state: { Subtotal, GrandTotal, GSTTotal } })
    }

    return (
        <div className="cart-container">

            <Header header="card" />

            <div className='cart-card-items'>
                {addToCart?.map((item, ind) => {
                    const { id, name, catagory, img, quntity, price } = item
                    GrandTotal += quntity * price;
                    GSTTotal = GrandTotal - (GrandTotal / 1.18)
                    Subtotal = GrandTotal - GSTTotal
                    return (
                        <div className='cart-card-item' key={ind}>
                            <img className='cart-card-image' src={img} />
                            <div style={{ width: '100%' }}>
                                <div>
                                    <h4>{name}</h4>
                                </div>
                                <div className='cart-card-button-section'>
                                    <div className='cart-card-button'>
                                        <button className='cart-card-btn' onClick={() => handleCartDecrement(id)}>-</button>
                                        <h5>{quntity}</h5>
                                        <button className='cart-card-btn' onClick={() => handleCartIncrement(id)}>+</button>
                                    </div>
                                    <h5 className='card-price'>&#x20B9;{quntity * price}</h5>
                                </div>

                            </div>
                        </div>
                    )
                })
                }
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


                <BottomButton name="Check Out" ClickFunction={handleCheckout} />

            </div>
        </div>
    );
}

export default Cart;
