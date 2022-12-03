import React from "react"
import CartContext from "../context/CartContext"
import ProductBox from "../components/ProductBox"
import { useContext, Fragment, useState } from "react"
import Navbar from '../components/Navbar'
import Topline from "../components/Topline"
import Footer from "../components/Footer"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom"
import axios from 'axios'



const Cart = () => {

    const context = useContext(CartContext)
    const {qty, cart} = context.cartState
    const navigate = useNavigate()

 

    const reducirtStock = async () => {
        try{
            const respuesta = await axios.put('http://localhost:4000/api/products/reduce', {cart})
        }catch(error){
            console.log(error)
        }
    }

    return(
        <Fragment>
            <Topline/>
            <Navbar/>
                <div>
                    <h1>Productos en el carro</h1>
                    {cart.map((el) => (
                        <Fragment>
                            <ProductBox item={el} key={el._id}/>
                        </Fragment>
                    ))}
                    {cart.length ? (
                    <div className="paydiv">
                        <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "1.99",
                                        currency_code:'CLP'
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                            context.cleanCart()
                            reducirtStock()
                            navigate('/')
                        });
                    }}
                    onError={()=>{
                        alert('algo salio mal')
                    }}
                    />
                    </div>
                    ):null}
                </div>
            <Footer/>
        </Fragment>
    )
}

export default Cart
