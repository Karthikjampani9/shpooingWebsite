import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../components/Nav.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='NavBar'>
        <Link to='/' className='links-home'>Home</Link>
        <Link to='/contact' className='links-contact'>Contact us</Link>
       <Link to='/cart' className='links-shoppingcart'><ShoppingCartIcon/></Link>
   
    </div>
  )
}

export default Navbar