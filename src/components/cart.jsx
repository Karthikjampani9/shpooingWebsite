import React, { useContext } from 'react'
import { PRODOUCTS } from './products'
import{ShopContext} from '../context/shop-context'
import CartItem from './CartItem'
import '../components/cart.css'

import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const{cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cartItems'>
        {PRODOUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}

      </div>

    {totalAmount > 0 ?
        <div className='checkout'>
          <h1>  Your Cart Items</h1>
          <p>Total amount: ₹{totalAmount}</p>
          <button onClick={()=>navigate("/")}>Continue Shopping</button>
          <button onClick={()=>navigate("/checkout")}>Checkout</button>
        </div>
: <h1>Your Cart is Empty please add some to cart</h1>}
    </div>
  );
};

export default Cart