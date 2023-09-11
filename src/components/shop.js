import React from 'react'
import {PRODOUCTS} from './products'
import PP from './Product.jsx'
import './shop.css'
const shop = () => {
  return (
    <div className='shop'>
        <h1>Welcome to our store</h1>
        
        <div className='products'>
        {" "}
        {PRODOUCTS.map((product) =>(
            <PP data ={product}/> 
        )

        )}    
         </div>

    </div>
  )
}

export default shop