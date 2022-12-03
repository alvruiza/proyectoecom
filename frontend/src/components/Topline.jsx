import './Topline.css'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom"
import UserContext from '../context/UserContext'
import { useContext, useState } from 'react';


const Topline = ({}) => {

    const token = localStorage.getItem('token')

    const state = useContext(UserContext)
    const [user, setUser] = useState({})

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
            <div className="container-fluid topline">
                <div className="row justify-content-center toplinerow">
                    <div className="col-lg-10 col-md-2 col-xs- telcol mx-auto">
                        <h1 className='teltxt'><PhoneIphoneIcon fontSize="small"/>+56981561420</h1>
                        <h1 className='teltxt'><AccessTimeOutlinedIcon fontSize="small"/>Lun - Vie 09:30 a 18:30hrs</h1>
                        <h1 className='teltxt'><PlaceOutlinedIcon fontSize="small"/>Av. El Rodeo 3359</h1>
                    </div>
                    <div className="col-lg-2 col-md-5 col-xs-5 telcol1 mx-auto">
                            <Stack direction="row" spacing={2}>
                                <Link to='/login'><Avatar alt="Aemy Sharp" sx={{ width: 34, height: 34, bgcolor: '#42114b' }}><PersonIcon/></Avatar></Link>
                                <div>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <h6 className='loginh6'>LOGIN</h6>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <Link to="/login" className='loginlink'><MenuItem onClick={handleClose}>Login</MenuItem></Link>
                                        {token ? null : <Link to="/signup" className='loginlink'><MenuItem onClick={handleClose}>Registrarse</MenuItem></Link> }
                                        {token ? <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem> : null}
                                    </Menu>
                                </div>
                            </Stack>
                    </div> 
                </div>
            </div>
    )
}

export default Topline