import './ProductBox.css'
import { useContext } from 'react';
import CartContext from "../context/CartContext";
import formatter from '../utils/formatPrice';

const ProductBox = ({item}) =>{

    const state = useContext(CartContext)
    const {cart} = state.cartState

    const {name, price, qty, _id} = item


    return(
        <div className="cartdiv">
            <h4 className="title">{name}</h4>
            <h6 className='qty'>x {qty}</h6>
            <h6 className="price">{formatter.format(price*qty)}</h6>
            <button className='delete' onClick={()=>state.deleteFromCart(_id)}>Eliminar</button>
        </div>
    )
}

export default ProductBox