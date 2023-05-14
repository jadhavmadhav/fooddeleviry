
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Contact from './component/Contact'
import ViewServices from './pages/ViewServices'
import PrivateRoute from './component/PrivateRoute'
import LandingPage from './component/LandingPage'
import { createContext, useState } from 'react'
import Footer from './component/Footer'
import Search from './pages/Search'
import Cart from './pages/ViewCart'
import CheckOut from './pages/CheckOut'
import PaymentGatWay from './pages/Payment'
import Header from './component/Header'
import Sider from './component/Sider'

export const MyContext = createContext()


const siderOpen = {
  left: '0%',
  opacity: '1'

}
const siderClose = {
  left: '-60%',
  opacity: '0'

}

function App() {

  const [userAuth, setUserAuth] = useState(false)
  const [isSidebar, setIsSidebar] = useState(false)

  //  Add to cart 

  const [addToCart, setAddToCart] = useState([])
 
  const ContextObject = {
    setUserAuth, addToCart, setAddToCart
  }
  const handleHamburger = () => {
    setIsSidebar(!isSidebar)
  }

  const handleCloseSidebar = () => {
    setIsSidebar(false)
  }
  return (
    <MyContext.Provider value={ContextObject}>
      <BrowserRouter>
        <div className='app-container'>
          <div className='main-header'>
            {userAuth && <Header CallbackFunction={handleHamburger} />}
            <div className='slider' style={isSidebar ? siderOpen : siderClose}>
              <Sider CallbackFunction={handleCloseSidebar} />
            </div>
          </div>
          <div className='main-content'>

            <Routes>
              <Route path='/' element={
                <PrivateRoute userAuth={userAuth}>
                  <Home />
                </PrivateRoute>
              } />
              <Route path='/login' element={<Login />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/landing' element={<LandingPage />} />
              <Route path='/' element={<ViewServices />} />

              <Route path='/search' element={<Search />} />
              <Route path='/view_cart' element={<Cart />} />
              {/* <Route path='/profile' element={<Profile />} /> */}
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='/payment' element={<PaymentGatWay />} />

            </Routes>
          </div>
          <div className='main-footer'>
            {userAuth && <Footer />}
          </div>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App
