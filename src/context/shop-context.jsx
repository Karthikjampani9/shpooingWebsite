import React, { createContext, useState } from 'react'
import {PRODOUCTS} from '../components/products'
//to create context
export const ShopContext = createContext(null);



const getDefaultCart = ()=>{
    let cart = {};
    //i = 1 because id of products were start with 1
    for(let i=1;i<PRODOUCTS.length + 1;i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    //object with 8 properties of products
    const[cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = PRODOUCTS.find((product) => product.id === Number(item));
                totalAmount = totalAmount + cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));

    };
    const removeToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));

    };

    const updateCartItems = (newAmount, itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeToCart, updateCartItems, getTotalCartAmount}

    
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}

