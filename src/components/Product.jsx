import React, { useContext } from 'react'
import{ShopContext} from '../context/shop-context'


const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const{addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return <div>
            <div>
                <img src={productImage} width='200px' alt='prodict image'></img>
                <p>
                <p>{productName}</p>
                <p>₹{price}</p>
                <button className='add-to-cart-button' onClick={()=>addToCart(id)}>
                    Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
                
                </p>
                <br></br>

               

            </div>
        </div>
  };
  

export default Product