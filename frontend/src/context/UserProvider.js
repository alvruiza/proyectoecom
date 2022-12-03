import UserContext from "./UserContext"
import { useReducer } from 'react'
import userReducers from "./UsersReducer"
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const UserProvider = ({ children }) => {

const navigate = useNavigate()

const [userState, dispatch] = useReducer(userReducers, {token: null})

const crearCuenta = async (user) => {
    try{
        const respuesta = await axios.post('http://localhost:4000/api/usuario', user)
        if (respuesta.data.success) {
            dispatch({ type: 'REGISTER', payload: respuesta.data.token })
        }
    } catch(error) {
        toast.error("Oops, algo salió mal!")
    }
}

const Login = async (user) => {
    try{
        const respuesta = await axios.post('http://localhost:4000/api/usuario/login', user)
        if(respuesta.data.success){
            dispatch({ type: 'LOGIN', payload: respuesta.data.token})
            toast.success('Sesion iniciada!')
            console.log(respuesta.data.token)
            localStorage.setItem('token', respuesta.data.token)
            setTimeout(()=>{
                navigate('/')
            },2000)
        }
    }catch(error){
        console.log(error.message)
    }
}

const Logout = () => {
    dispatch({ type: 'LOGOUT'})
    Storage.clear()
    setTimeout(()=>{
        navigate('/')
    },2000)
}

const validateToken = async () => {
    const token = localStorage.getItem('token')
    if(token){
        const respuesta = await axios.get('http://localhost:4000/api/usuario', {
            header: {
                Authorization: 'Bearer' + token
            }
        })
        if(respuesta.data.success){
            dispatch({type: 'REGISTER', payload: token})
        }
    }
}

return <UserContext.Provider value={{userState, crearCuenta, Logout, Login, validateToken}}>{children}</UserContext.Provider>
    
}

export default UserProvider