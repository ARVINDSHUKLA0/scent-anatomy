import React, { createContext, useState } from 'react'
export const CartSildeContext = createContext()

export const CartProvider = ({children})=>{
    const  [showCart, setShowCart]= useState(false)
    return(
        <>
          <CartSildeContext.Provider value={{showCart, setShowCart}}>
             {children}
          </CartSildeContext.Provider>
        </>
    )
}