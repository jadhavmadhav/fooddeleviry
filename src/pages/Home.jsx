
import '../style/HomeModule.css'
import Img from "../assets/hero.png"
import { useNavigate } from 'react-router-dom';
import { Data, Special, RData } from '../Data';
import { useContext } from 'react';
import { MyContext } from '../App';
import ItemCard from '../component/itemCard';

const Home = () => {

    const contextData = useContext(MyContext)
    const { addToCart, setAddToCart } = contextData


    return (
        <>
            <h5 className='home-section-title'>Featured recipe</h5>
            <div className="card">
                <div className='card-image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMBE1NgXGmXLgsyKGxVpExwOIttiUXVr0BbkUoA8TsEE98--wgxy1tYKZwWN8ccUc_mQ&usqp=CAU' />
                </div>
                <div className='card-body'>
                    <h5 className="card-body-title">Punjabi thali</h5>
                    {/* <span><StarIcon /></span> */}

                </div>
            </div>

            <h5 className='home-section-title'>Recommended recipes</h5>
            <div className='home-items-cards'>
                <div style={{ display: 'flex', gap: '10px' }}>

                    {
                        Data?.map((item, index) => <ItemCard data={item} index={index} />)
                    }
                </div>
            </div>

            <h5 className='home-section-title'> Spacial Meal </h5>
            <div className='home-items-cards'>
                <div style={{ display: 'flex', gap: '10px' }}>

                    {
                        Special?.map((item, index) => <ItemCard data={item} ind={index} />)
                    }
                </div>
            </div>

            <div className=''>
                <div  >

                    {
                        RData?.map((item, index) => {
                            let { name, result } = item
                            return (
                                <>
                                    <h5 className='home-section-title'> {name} </h5>
                                    <div className='home-items-cards'>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            {
                                                result?.map((ele, index) => <ItemCard data={ele} ind={index} />)
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div >



        </>
    );
}

export default Home;
