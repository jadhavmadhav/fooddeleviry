import '../style/Search.css'
import searchImg from '../assets/search.svg'
import Img from '../assets/hero.png'

let Data = [
    {
        id: 1,
        catagory: 'Biryani',
        name: 'Double Masala Chicken Dum Biryani',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLcjzfW_Wx_jh7swBDD9xC3WD4CqAQqarFA&usqp=CAU",
        price: 165,
        quantity: 1
    },
    {
        id: 2,
        catagory: 'Biryani',
        name: 'Classic Chicken Biriyani ',
        img: 'https://bonmasala.com/wp-content/uploads/2022/11/Chicken-biriyani-recipe-scaled.webp',
        price: 249,
        quantity: 1
    },
    {
        id: 3,
        catagory: 'veg',
        name: 'Punjabi thali',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMBE1NgXGmXLgsyKGxVpExwOIttiUXVr0BbkUoA8TsEE98--wgxy1tYKZwWN8ccUc_mQ&usqp=CAU',
        price: 199,
        quantity: 1
    },
    {
        id: 4,
        catagory: 'veg',
        name: 'maharashtra thali',
        img: 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/09/05162719/05092017_DurvankarDiningHall_03.jpg',
        price: 129,
        quantity: 1
    }
]
const Search = () => {
    return (
        <div className="search-container">
            <div className="search-filed">
                <img src={searchImg} />
                <input placeholder='Search' />
            </div>

            <div className='search-items'>
                {
                    Data.map((item) => {
                        const { id, img, catagory, name } = item
                        return (
                            <div key={id} className='search-item-card'>
                                <img src={img} />
                                <div className='search-item-card-content'>
                                    <p>{catagory}</p>
                                    <h5>{name}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Search;
