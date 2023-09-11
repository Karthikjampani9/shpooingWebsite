import React, { useContext } from 'react'
import '../components/cart.css'
import{ShopContext} from '../context/shop-context'

const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data;
  const{cartItems, addToCart, removeToCart, updateCartItems} = useContext(ShopContext);
    
  return (
    <div className='cartItem'>
        <img src={productImage}></img>
        <div className='discription'>
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
            <div className='CountHandler'>
              <button onClick={() => removeToCart(id)}> - </button>
              <input value={cartItems[id]} onChange={(e) => updateCartItems(Number(e.target.value), id)}/>
              <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
        </div>
  )
}

export default CartItem