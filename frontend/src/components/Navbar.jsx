import './Navbar.css'
import Topline from './Topline'
import {Link} from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const { Fragment } = require("react")

const Navbar = () => {
    return(
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <Link to='/'><img src="https://i.postimg.cc/sgRZzhjN/logo-nat.png" alt="" width="200" height="50" class="d-inline-block align-text-top"></img></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto linkul">
                        <li class="nav-item">
                            <Link to='/' className='navlink'>Inicio</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/' className='navlink'>Planes</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/' className='navlink'>Cursos</Link>
                        </li>
                        <li class="nav-item ">
                        <Link to='/' className='navlink'>Nosotros</Link>
                        </li>
                        <li class="nav-item ">
                        <Link to='/' className='navlink'>Contacto</Link>
                        </li>
                        <li>
                            <Link to='/cart' className='cartlink'><ShoppingCartOutlinedIcon className='cart'/></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar