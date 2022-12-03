import * as React from 'react';
import TextField from '@mui/material/TextField';
import './Loginbox.css'
import {useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Topline from '../components/Topline';
import {Link} from 'react-router-dom'
import toast, {Toaster} from "react-hot-toast"
import { useContext } from 'react'
import UserContext from '../context/UserContext'



const Loginbox = ({tag}) => {
    const state = useContext(UserContext)
    const [user, setUser] = useState({})

    useEffect(()=>{
        document.title = tag === 'login' ? 'Iniciar Sesion' : 'Registro'
    }, [tag])

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const handleSign = () => {
        if (tag === 'login') state.Login(user)
        else state.crearCuenta(user)
      }

    return(
        <Fragment>
            <Toaster
                 position="bottom-center"
                reverseOrder={false}
            />
            <Topline/>
            <Navbar/>
            <div className="container-fluid">
                <div className="row justify-content-center loginrow">
                        <div className="col-lg-4 inputcol">
                            <h1 className="logintitle">{tag === 'login' ? 'Inciar Sesion' : 'Crear Cuenta'}</h1>
                            <img src="https://i.postimg.cc/tCcHHzZS/Dise-o-sin-t-tulo-2022-11-20-T165157-640.png" alt="" className="loginlogo" />
                            <TextField
                            required
                            id="standard-required"
                            label="Correo"
                            type='email'
                            defaultValue=""
                            variant="standard"
                            onChange={(e) => handleInput(e)}
                            name='correo'
                            />
                            <TextField
                            required
                            id="standard-required"
                            label="Password"
                            type='password'
                            defaultValue=""
                            variant="standard"
                            onChange={(e) => handleInput(e)}
                            name='password'
                            />
                            <button className="sendbtn" onClick={handleSign}>{ tag === 'login' ? 'INICIAR SESION' : 'CREAR CUENTA'}</button>
                            <div className="sesionlinks">
                                {tag !== 'login' ? <span className='sestxt'>¿Ya tienes una cuenta? </span> : <span className='sestxt'>¿Aun no tienes una cuenta? </span>}{tag !== 'login' ? <Link to='/login' className='seslink'>Inicia Sesion</Link> : <Link to='/signup' className='seslink'>Crea Una</Link>}
                            </div>
                        </div>
                </div>
            </div>
            <Footer/>
        </Fragment>

    )
}

export default Loginbox