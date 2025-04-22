import React, { useContext, useEffect } from 'react'
import '../ComponentsStyle/Cart.css'
import { CartSildeContext } from '../Context/CartCompContext'
import { AddtoCartWarpper } from '../Context/AddToCartContext'
import EmptyCart from '/assets/img/empty-cart.webp'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { showCart, setShowCart } = useContext(CartSildeContext)
    const { cartItems, incrementItem, decrementItem, CartItemRemove, total } = useContext(AddtoCartWarpper)

    const toggleCart = () => {
        setShowCart(false)
    }
    const CartComponentFunc = () => {
        const cartComp = document.getElementById('cartComp')
        const WraperCart = document.getElementById('WraperCart')

        if (showCart) {
            cartComp.style.display = 'flex'
            setTimeout(() => {
                WraperCart.style.left = '0px'
            }, 10)
            return
        }
        WraperCart.style.left = '400px'
        setTimeout(() => {
            cartComp.style.display = 'none'
        }, 300)

    }
    useEffect(() => {
        CartComponentFunc()
    }, [showCart])


    return (
        <div>
            <div className="CartContainer" id='cartComp'>
                <div className="Wrapper-bg-Cart" onClick={toggleCart}></div>
                <div className={`cart-wraper d-flex flex-column`} id='WraperCart'>
                    <div className='d-flex justify-content-between align-items-center my-3 ms-4 me-4'>
                        <h5 className='mt-1 fw-light'>Shopping cart</h5>
                        <div className='cart-remove-btn'>
                            <i onClick={toggleCart} className="fa-solid fa-xmark text-center custom-remove-set fs-5"></i>
                        </div>
                    </div>
                    <div className='aside-cart-height'>
                        {
                            cartItems.length === 0 ? (
                                <div className="text-center mt-3">
                                    <img className='img-fluid' src={EmptyCart} width={120} alt="" />
                                    <p className='mt-3 fs-4 text-danger fst-italic'>Your cart is empty</p>
                                    <p className='text-muted px-4'>Looks like you haven't added anything to your cart yet. Start exploring our collection now!</p>

                                    <Link onClick={() => setShowCart(false)} to="/shop" className='text-decoration-none text-white'>
                                        <button className='btn-normal w-50 mb-3 text-capitalize'>
                                            continue shopping
                                        </button>
                                    </Link>

                                </div>
                            ) : (
                                cartItems.map((asideCartValue, index) => (

                                    <div className='d-flex justify-content-between mb-4 mt-2' key={index}>
                                        <div>
                                            <img className='img-fluid' src={asideCartValue.thumbnailImage} width={130} alt="" />
                                        </div>
                                        <div className='ps-4'>
                                            <p className='pe-3 fw-light'>{asideCartValue.title}</p>
                                            <p> &#x20B9; {asideCartValue.price}</p>
                                            <div className='mb-3'>
                                                <button onClick={() => decrementItem(asideCartValue.id)} className='btn-product-minus'>-</button>
                                                <span className='btn-product-data-show'>{asideCartValue.quantity}</span>
                                                <button onClick={() => incrementItem(asideCartValue.id)} className='btn-product-plus'>+</button>
                                            </div>

                                        </div>
                                        <div>
                                            <Link onClick={() => CartItemRemove(asideCartValue.id)}>
                                                <i className="fa-solid fa-xmark pe-5 text-dark"></i>
                                            </Link>
                                        </div>
                                    </div>

                                )))
                        }
                    </div>
                    <div className='ps-lg-4 ps-2 pe-3 pe-lg-5 mt-2 pb-3 custom-height-set'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='fs-5 text-capitalize'>subtotal</p>
                            <p> &#x20B9; {total}</p>
                        </div>
                        <p className='fs-small text-capitalize'>Taxes and shipping calculated at checkout</p>
                        <Link to="/checkout" className='text-decoration-none text-white'>
                            <button onClick={() => setShowCart(false)} className='text-capitalize btn-normal w-100 mb-lg-3 mb-2'>check out</button>
                        </Link>

                        <Link to="/cartview" className='text-decoration-none text-white'>
                            <button onClick={() => setShowCart(false)} className='text-capitalize btn-normal w-100'>view cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart