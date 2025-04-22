import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Home from './Pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductBuy from './Pages/ProductBuy';
import { CartProvider } from './Context/CartCompContext';
import { AddToCartContext } from './Context/AddToCartContext';
import { WislistContext } from './Context/WislistContext';
import WishList from './Pages/WishList';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Forget from './Pages/Forget';
import CartView from './Pages/CartView';
import CheckOut from './Pages/CheckOut';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import About from './Pages/About';
import Privacypolicy from './Pages/Privacypolicy';
import TermsConditions from './Pages/TermsConditions';
import Cancellations from './Pages/Cancellations';
import Shop from './Pages/Shop';
 

function App() {
  const [count, setCount] = useState(0)

  const ProtectedRoute = ({children, auth = false})=>{
    const tokenData = localStorage.getItem('token');
    const isAuth = !!tokenData
    if(!isAuth && auth){
     return <Navigate to="login" replace/>;
    }
    if(isAuth && ['/login', 'signup'].includes(window.location.pathname)){
      return <Navigate to="/" replace />

    }
    return children;

  }

  return (
    <>
    <WislistContext>
      <AddToCartContext>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ProtectedRoute auth={false}><Home/></ProtectedRoute>} />
              <Route path='/shop' element={<Shop/>}/>
              <Route path='/productbuy/:id' element={<ProductBuy />} />
              <Route path='/wislist' element={<WishList/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/forget' element={<Forget/>}/>
              <Route path='/cartview' element={<CartView/>}/>
              <Route path='/checkout' element={<CheckOut/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/faq' element={<Faq/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/privacypolicy' element={<Privacypolicy/>}/>
              <Route path='/termconditions' element={<TermsConditions/>}/>
              <Route path='/cancellations' element={<Cancellations/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AddToCartContext>
      </WislistContext>
    </>
  )
}

export default App
