import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Cart from './views/Cart'
import Product from './views/Product';
import { useContext, useEffect } from 'react';
import UserContext from './context/UserContext'
import NotFound from './views/NotFound';
import Loginbox from './components/Loginbox';
import CartContext from './context/CartContext';


function App() {

const context = useContext(UserContext)
const token = context.userState.token
const cartContext = useContext(CartContext)

useEffect(()=>{
  context.validateToken()
  cartContext.recoverFromLS()
}, [])


  return( 
  <Routes>
    <Route path="/" element={<Home token={token} />}/>
      {!token && <Route path="/login" element={<Loginbox tag="login" />}/>}
      {!token && <Route path="/signup" element={<Loginbox tag="register"/>}/>}
      <Route path="*" element={<Login />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/producto/:id' element={<Product/>}/>
      <Route path="/not-found" elemnt={<NotFound />}/>
      <Route path="*" element={<Navigate to={token ? '/' : '/not-found'}/>}/>
  </Routes>
  )
}

export default App;
