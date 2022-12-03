import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    const obtenerProducto = async() => {
        const respuesta = await axios.get(`http://localhost:4000/api/product/${id}`)
        setProduct(respuesta.data.product)
    }

    useEffect(()=>{
        obtenerProducto()
    },[])
}


export default Product