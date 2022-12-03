import { Fragment, useState, useEffect, useContext } from "react"
import './Plans.css'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CartContext from "../context/CartContext";
import axios from 'axios'

const Plans = () => {
    const [products, setProducts] = useState([])
    const state = useContext(CartContext)

    const fetchProducts = async () =>{
        try{
            const response = await axios.get('http://localhost:4000/api/productos/4')
            setProducts(response.data.products)
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchProducts()
    }, [])

    return(
        <div className="product">
            {
                products.map((producto) => {
                    return(
                        <div className="productcard" key={producto._id}>
                            <h6 className="producttitle">{producto.name}</h6>
                            <div className="line"></div>
                            <h1 className="price">${producto.price}</h1>
                            <p className="description">{producto.description}</p>
                            <ul className="prodlist">
                                <li className="listitem"><CheckOutlinedIcon className="check"/>{producto.propiedades[0].proper1}</li>
                                <li className="listitem"><CheckOutlinedIcon className="check"/>{producto.propiedades[0].proper2}</li>
                                <li className="listitem"><CheckOutlinedIcon className="check"/>{producto.propiedades[0].proper3}</li>
                                <li className="listitem"><CheckOutlinedIcon className="check"/>{producto.propiedades[0].proper4}</li>
                            </ul>
                            <div className="btndiv">
                                <button className="addbtn" onClick={()=>state.addToCart(producto, 1)}>AGREGAR<AddShoppingCartOutlinedIcon className="cart"/></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Plans