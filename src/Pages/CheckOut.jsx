import React, { useContext, useState } from 'react'
import '../PagesStyle/CheckOut.css'
import Navbar from '../Components/Navbar'
import { AddtoCartWarpper } from '../Context/AddToCartContext'
import EmptyCart from '/assets/img/empty-cart.webp'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const initialValue = {
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
    number: '',
    optionalNumber: '',
}

const CheckOut = () => {
    const { cartItems, incrementItem, decrementItem, CartItemRemove, total } = useContext(AddtoCartWarpper)
    const [newAddress, setNewAddress] = useState(false)
    const [addressDataPrint, setAddressDataPrint] = useState({})
    const [addressData, setAddressData] = useState(initialValue)

    const DataOnChangeFunc = (event) => {
        const { name, value } = event.target;
        setAddressData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const DataSubmitFunc = (event) => {
        event.preventDefault();
        console.log("addressData", addressData)
        setAddressDataPrint(addressData)
        setAddressData(initialValue)
    }

    const NewAddressFuunc = () => {
        setNewAddress(true)
    }

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
        "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
    ]

    return (
        <>
            <Navbar />
            <section>
                <div className="container my-5 px-2">
                    {
                        cartItems.length === 0 ? (
                            <div className="text-center mt-3">
                                <img className='img-fluid' src={EmptyCart} width={120} alt="" />
                                <p className='mt-3 fs-4 text-danger fst-italic'>Your cart is empty</p>
                                <p className='text-muted px-4'>Looks like you haven't added anything to your cart yet. Start exploring our collection now!</p>
                                <Link to="/shop" className='text-decoration-none text-white'>
                                <button className='btn-normal  w-50 mb-3 text-capitalize'>continue shopping</button>
                                </Link>
                            </div>
                        ) : (
                            <div className="row m-0">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-2 mb-4">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h5 className='text-capitalize m-0'>address :-</h5>
                                        <div className='pe-4'>
                                            <button className='custom-btn-checkout text-capitalize fs-small'>change address</button>
                                        </div>
                                    </div>

                                    <div className='my-3'>
                                        {
                                            Object.keys(addressDataPrint).length > 0 ? (
                                                <div>
                                                    <p className='m-0 text-capitalize'>{addressDataPrint.address}, {addressDataPrint.city}, {addressDataPrint.state}</p>
                                                    <p className='m-0 text-capitalize'>{addressDataPrint.name}, {addressDataPrint.pincode}</p>
                                                    <p className='m-0'>+{addressDataPrint.number}</p>
                                                </div>
                                            ) : (
                                                <p>No address saved</p>
                                            )
                                        }
                                    </div>

                                    <button onClick={NewAddressFuunc} className='custom-btn-checkout text-capitalize fs-small mt-2'>new address</button>

                                    {
                                        newAddress && (
                                            <div className='my-4 me-lg-4'>
                                                <h6 className='text-capitalize fst-italic text-danger mb-3'>fill your address :-</h6>
                                                <form onSubmit={DataSubmitFunc}>
                                                    <div className="form-group mb-3">
                                                        <input className='w-100 form-control py-2' name='name' value={addressData.name} onChange={DataOnChangeFunc} type="text" placeholder='Enter receiver name' required />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <input className='w-100 form-control py-2' name='address' value={addressData.address} onChange={DataOnChangeFunc} type="text" placeholder='Enter address' required />
                                                    </div>
                                                    <div className='d-flex me-1 justify-content-between align-items-center'>
                                                        <div className="form-group mb-3 w-100 me-1">
                                                            <input className='form-control py-2' name='city' value={addressData.city} onChange={DataOnChangeFunc} type="text" placeholder='City' required />
                                                        </div>
                                                        <div className="form-group mb-3 w-100 mx-1">
                                                            <select className="form-select py-2" name="state" value={addressData.state} onChange={DataOnChangeFunc} required>
                                                                <option value="">Select State</option>
                                                                {indianStates.map((state, index) => (
                                                                    <option key={index} value={state}>{state}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="form-group mb-3 w-100 ms-1">
                                                            <input className='form-control py-2' name='pincode' value={addressData.pincode} onChange={DataOnChangeFunc} type="number" placeholder='Pincode' required />
                                                        </div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <input className='w-100 form-control py-2' name='landmark' value={addressData.landmark} onChange={DataOnChangeFunc} type="text" placeholder='Landmark (optional)' />
                                                    </div>
                                                    <div className='d-flex me-1'>
                                                        <div className="form-group w-100 mb-3">
                                                            <input className='form-control py-2' name='number' value={addressData.number} onChange={DataOnChangeFunc} type="number" placeholder='Phone number' required />
                                                        </div>
                                                        <div className="form-group w-100 mb-3 ms-1">
                                                            <input className='form-control py-2' name='optionalNumber' value={addressData.optionalNumber} onChange={DataOnChangeFunc} type="number" placeholder='Secondary number (optional)' />
                                                        </div>
                                                    </div>
                                                    <button type='submit' className='btn-normal w-100 text-capitalize'>save address</button>
                                                </form>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className='rounded-3 bg-light py-2 px-3'>
                                        {
                                            cartItems.map((item, index) => (
                                                <div key={index} className='d-md-flex d-block align-items-center justify-content-between mb-5 '>
                                                    <div className='d-flex mb-3'>
                                                        <img className='img-fluid custom-width' src={item.thumbnailImage} alt="" />
                                                        <div className='w-50 ps-3'>
                                                            <p className='m-0 fs-small'>{item.title}</p>
                                                            <p className='m-0 fs-small'>&#x20B9; {item.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className='mb-3 d-flex justify-content-end text-end pe-3'>
                                                        <button onClick={() => decrementItem(item.id)} className='btn-product-minus'>-</button>
                                                        <span className='btn-product-data-show'>{item.quantity}</span>
                                                        <button onClick={() => incrementItem(item.id)} className='btn-product-plus'>+</button>
                                                        <span onClick={() => CartItemRemove(item.id)} className='ps-3'>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        <div className='d-flex'>
                                            <input className='form-control w-50 py-1 rounded-4' type="text" placeholder='Discount code...' />
                                            <button className='btn-normal w-50 ms-2'>apply</button>
                                        </div>
                                        <div className='d-flex justify-content-between my-3'>
                                            <ul className='m-0'>
                                                <li className='list-icon-none text-capitalize fs-small'>subtotal</li>
                                                <li className='list-icon-none text-capitalize fs-small'>shipping</li>
                                                <li className='list-icon-none text-capitalize'>payable amount</li>
                                            </ul>
                                            <ul className='m-0'>
                                                <li className='list-icon-none fs-small'>&#x20B9; {total}</li>
                                                <li className='list-icon-none text-capitalize fs-small'>free</li>
                                                <li className='fs-5 list-icon-none fs-small'>&#x20B9; {total}</li>
                                            </ul>
                                        </div>
                                    </div>
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

export default CheckOut
