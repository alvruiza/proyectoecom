import { useEffect, useState, useContext } from "react"
import FeaturesBox from "../components/FeaturesBox"
import Jumbotron from "../components/Jumbotron"
import Navbar from "../components/Navbar"
import Topline from "../components/Topline"
import Story from "../components/Story"
import Testimonials from "../components/Testimonials"
import Plans from "../components/Plans"
import ProductCard from '../components/ProductCard'
import Footer from "../components/Footer"
import axios from "axios"
import UserContext from '../context/UserContext'


const Home = ({token}) => {

const [qty, setQty] = useState()

const [products , setProducts] = useState([])

const obtenerTop10 = async () => {
    try{
        const respuesta = await axios.get('http://localhost/api/productos/10')
        if(respuesta.data.product.success) {
            setProducts(respuesta.data.products)
        }
    }catch(error){
        console.log(error)
    }
}

    useEffect(()=>{
        document.title = "Inicio"
    }, [])

    return(
        <div>
            <Topline token={token} />
            <Navbar />
            <Jumbotron />
            <FeaturesBox />
            <Story />
            <Plans />
            <Testimonials/>
            <Footer />
            {products.map((el) => <ProductCard key={el._id}/>)}
        </div>
    )
}

export default Home