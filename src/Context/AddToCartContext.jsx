import React, { createContext, useEffect, useState } from 'react'
import Product from '../Api/Product';
import Swal from "sweetalert2";
export const AddtoCartWarpper = createContext()



export const AddToCartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);


    const addToCartFunc = async (id, quantity = 1) => {
        let AddtocartLocalstore = JSON.parse(localStorage.getItem('cartItems')) || []
        let DataAssing = AddtocartLocalstore.find(item => item.id === id)
        if (DataAssing) {
            Swal.fire({
                position: "top-end",
                icon: "warning", 
                title: `<p className="custom-text-sweetAlirt">product is already in the cart</p>`,
                showConfirmButton: false,
                timer: 1500,
            });

            return;
        }
        let DataConvertStr = [...AddtocartLocalstore, { id, quantity }]
        localStorage.setItem('cartItems', JSON.stringify(DataConvertStr))
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `<p className="custom-text-sweetAlirt">product added to cart</p>`,
            showConfirmButton: false,
            timer: 1500,
        });

        DataFilterCart()

    };

    const incrementItem = (id) => {
        let ietmIncrement = JSON.parse(localStorage.getItem('cartItems')) || []
        let DataItemIncrment = ietmIncrement.map((incrementValue) => {
            if (incrementValue.id === id) {
                incrementValue.quantity += 1
            }
            return incrementValue
        })
        localStorage.setItem('cartItems', JSON.stringify(DataItemIncrment))
        DataFilterCart()

    }

    const decrementItem = (id) => {
        let decrementLocal = JSON.parse(localStorage.getItem('cartItems')) || []
        let decrementLoop = decrementLocal.map((decrementValue) => {
            if (decrementValue.id == id && decrementValue.quantity > 1) {
                decrementValue.quantity--
            }
            return decrementValue
        })
        localStorage.setItem('cartItems', JSON.stringify(decrementLoop))
        DataFilterCart()
    }

    const CartItemRemove = (id) => {
        let Cartitem = JSON.parse(localStorage.getItem('cartItems')) || []
        let filterData = Cartitem.filter((removeitem) => removeitem.id != id)
        localStorage.setItem('cartItems', JSON.stringify(filterData))
        DataFilterCart()
    }

    const CartTotalPriceFunc = () => {
        if (!cartItems) {
            return
        }
        let dataTotal = cartItems.reduce((sum, item) => {
            return sum + item.price * item.quantity
        }, 0)
        setTotal(Number(dataTotal.toFixed(2)))
    }


    const DataFilterCart = () => {
        let CartDataNew = localStorage.getItem('cartItems')
        if (CartDataNew && Product?.length > 0) {
            CartDataNew = JSON.parse(CartDataNew)
            let DataVlaueCart = CartDataNew.map((DataValue) => {
                let reusiltValueCart = Product.find(value => value.id === DataValue.id)
                reusiltValueCart = { ...reusiltValueCart, quantity: DataValue.quantity || 1 }
                return reusiltValueCart
            })
            setCartItems(DataVlaueCart)
        }
    }


    useEffect(() => {
        DataFilterCart()
    }, [Product])

    useEffect(() => {
        setTotal(CartTotalPriceFunc)
    }, [cartItems])
    return (
        <AddtoCartWarpper.Provider value={{ cartItems, addToCartFunc, incrementItem, decrementItem, CartItemRemove, total }}>
            {children}
        </AddtoCartWarpper.Provider>
    )
}
