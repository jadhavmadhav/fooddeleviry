import { useContext } from "react";
import { MyContext } from "../App";
import { Data } from "../Data";



const ItemCard = ({ index, data }) => {
    const { img, price, name } = data

    const contextData = useContext(MyContext)
    const { addToCart, setAddToCart } = contextData


    const handleAddToCart = (data) => {
        setAddToCart([...addToCart, { ...data, quntity: 1 }])
    }
    const handleRemoveAddToCart = (index) => {
        let temp = addToCart
        temp.splice(index, 1)
        setAddToCart([...temp])
    }

    return (
        <div className='item-card'>
            <div className='item-card-image'>
                <img src={img} />
            </div>
            <div className='item-card-body'>
                <h6 className='item-card-title'>{name}</h6>
                <div className='item-card-footer'>
                    <h6 className='item-card-price'>&#x20B9;{price.toFixed(2)}</h6>

                    <button className='item-card-addtocart-button'
                        onClick={() => {
                            addToCart?.findIndex(i => i.name === name) !== -1 ? handleRemoveAddToCart(data, index) : handleAddToCart(data)
                        }}>
                        {
                            addToCart?.findIndex(i => i.name === name) !== -1 ? "Added" : "Add to Cart"
                        }
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ItemCard;
