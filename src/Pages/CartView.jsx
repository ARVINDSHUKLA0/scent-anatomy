import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import '../PagesStyle/CartView.css'
import { AddtoCartWarpper } from '../Context/AddToCartContext'
import EmptyCart from '/assets/img/empty-cart.webp'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const CartView = () => {
    const { cartItems, incrementItem, decrementItem, CartItemRemove, total } = useContext(AddtoCartWarpper)
    return (
        <>
            <Navbar />
            <section className='py-lg-5 py-3'>
                <div className="container">
                    {
                        cartItems.length === 0 ? (
                            <div className="text-center mt-3">
                                <img className='img-fluid' src={EmptyCart} width={120} alt="" />
                                <p className='mt-3 fs-4 text-danger fst-italic'>Your cart is empty</p>
                                <p className='text-muted px-4'>Looks like you haven't added anything to your cart yet. Start exploring our collection now!</p>
                                <Link to="/shop" className='text-decoration-none text-white'>
                                <button className='btn-normal w-50 mb-3 text-capitalize'>continue shopping</button>
                                </Link>
                            </div>
                        ) : (
                            cartItems.map((CartViewValue, index) => (
                                <div className='d-sm-flex d-block justify-content-between border-bottom mb-4'>
                                    <div className='d-flex '>
                                        <div className='mb-3'>
                                            <img className='img-fulid' src={CartViewValue.thumbnailImage} width={110} alt="" />
                                        </div>
                                        <div>
                                            <p className='fw-bold m-0 fs-small text-uppercase'>{CartViewValue.title}</p>
                                            <p className='m-0 fs-small '> &#x20B9; {CartViewValue.price}</p>
                                            <p className='m-0 fs-small text-capitalize'>meterial : scent</p>
                                            <p className='m-0 fs-small text-capitalize'>type : men</p>
                                        </div>
                                    </div>
                                    <div className='mb-3 text-end pe-3'>
                                        <button onClick={() => decrementItem(CartViewValue.id)} className='btn-product-minus'>-</button>
                                        <span className='btn-product-data-show'>{CartViewValue.quantity}</span>
                                        <button onClick={() => incrementItem(CartViewValue.id)} className='btn-product-plus'>+</button>
                                        <span onClick={() => CartItemRemove(CartViewValue.id)} className='ps-3 '>
                                            <i className="fa-solid fa-trash"></i>
                                        </span>
                                    </div>
                                </div>
                            ))

                        )
                    }

                    {
                        cartItems.length === 0 ? (
                            <>
                            </>
                        ) : (
                            <div className='text-end'>
                                <Link>
                                    <button className='login-btn-normal custom-width-set'>continuse shopping</button>
                                </Link>
                                <div className='mt-lg-5 mb-lg-4'>
                                    <p className='m-0 text-capitalize'>subtotal : &#x20B9; {total} </p>
                                    <p className='text-capitalize m-0 py-3'>Taxes and shipping calculated at checkout</p>
                                    <Link>
                                        <button className='text-capitalize login-btn-normal custom-padding-checkout'>check out</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CartView