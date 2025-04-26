import React, { useContext, useEffect, useState } from 'react'
import '../ComponentsStyle/Navbar.css' 
import logoImage from '/assets/img/logo.png' 
import { Link, useNavigate } from 'react-router-dom'
import { CartSildeContext } from '../Context/CartCompContext'
import Cart from './Cart'
import { AddtoCartWarpper } from '../Context/AddToCartContext'
import { WisListdata } from '../Context/WislistContext'
const Navbar = () => {
    const { setShowCart } = useContext(CartSildeContext)
    const { cartItems } = useContext(AddtoCartWarpper)
    const { dataWislist } = useContext(WisListdata)
    const [menuActive, setMenuActive] = useState(false)
    const [menuOpen, setIsOpen] = useState(false)
    const [dropToggleMenu, setDropToggleMenu] = useState(false);
    const [listIcon, setListIcon] = useState(false);
    const [dropName, setDropName] = useState(false)

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, [])
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        navigate('/')
    }

    const Sidebaropen = () => {
        setsideBar(true);
    };


    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    const toggleDropdownMenu = (title) => {
        if (dropName === title) {
            setDropName("")
            setListIcon(false);
            return
        }

        else {
            setDropName(title);
            setListIcon(true);
        }
    }

    const handleIconClick = () => {
        setListIcon(!listIcon);
    };


    const toggleNavbar = () => {
        setIsOpen(!menuOpen);
    };
    const dropdownMenu = () => {
        setDropToggleMenu(!dropToggleMenu);
    };

    const CarthandelFunc = () => {
        setShowCart(true)
    }





    return (
        <nav className='px-3 position-relative'>
            <div>
                <div className=' navbar-main-display'>
                    <div className={`sm-postion    ${menuOpen ? 'menuOpen' : ''}`}>
                        <p className='bars-icon-display text-end'>
                            <Link >
                                <i onClick={toggleNavbar} className="fa-solid fa-xmark fs-5 text-white"></i>
                            </Link>
                        </p>
                        <ul className={`list-display-menu gap-3 m-0 ${menuActive ? 'active' : ''}`}>

                            <li className='list-icon-none'>
                                <Link className='custom-font-size text-uppercase cutom-color py-4 custom-font-weight text-decoration-none custom-padding-shop ' to="/">home</Link>
                            </li>

                            <li className='list-icon-none'>
                                <Link className='custom-font-size text-uppercase cutom-color py-4 custom-font-weight text-decoration-none custom-padding-shop ' to="/about">about</Link>
                            </li>

                            <li onClick={() => toggleDropdownMenu("shop")} className='list-item pt-1 cursor-pointer list-icon-none item-sm-py  custom-font-size text-uppercase custom-font-weight '>
                                <Link to="/shop" className='text-decoration-none cutom-color py-4'>shop</Link>
                                <i className={`fa-solid fa-chevron-down mx-3 icon-list listIcon ${dropName === 'shop' && listIcon ? 'listIconrotated' : ''}`}></i>
                                <div className={`drop-dwon ${(dropName === 'shop') ? 'dropToggleMenu' : ''}`}>

                                    <ul className=' d-lg-flex d-block justify-content-between'>
                                        <li className='custom-font-size text-uppercase custom-font-weight list-icon-none' >shop types
                                            <ul>
                                                <li className='py-1 list-icon-none' >view all home</li>
                                                <li className='py-1 list-icon-none' >the english garden collection  </li>
                                                <li className='py-1 list-icon-none' >the city collection</li>
                                                <li className='py-1 list-icon-none' >the aoud collection</li>
                                                <li className='py-1 list-icon-none' >candles</li>
                                                <li className='py-1 list-icon-none' >reed diffusers</li>
                                            </ul>
                                        </li>
                                        <li className='custom-font-size text-uppercase custom-font-weight list-icon-none' >product types
                                            <ul>
                                                <li className='py-1 list-icon-none' >view all home</li>
                                                <li className='py-1 list-icon-none' >the english garden collection  </li>
                                                <li className='py-1 list-icon-none' >the city collection</li>
                                                <li className='py-1 list-icon-none' >the aoud collection</li>
                                                <li className='py-1 list-icon-none' >candles</li>
                                                <li className='py-1 list-icon-none' >reed diffusers</li>
                                            </ul>
                                        </li>
                                        <li className='custom-font-size text-uppercase custom-font-weight list-icon-none' >feature
                                            <ul>
                                                <li className='py-1 list-icon-none' >view all home</li>
                                                <li className='py-1 list-icon-none' >the english garden collection  </li>
                                                <li className='py-1 list-icon-none' >the city collection</li>
                                                <li className='py-1 list-icon-none' >the aoud collection</li>
                                                <li className='py-1 list-icon-none' >candles</li>
                                                <li className='py-1 list-icon-none' >reed diffusers</li>
                                            </ul>
                                        </li>
                                        <li className='custom-font-size text-uppercase custom-font-weight list-icon-none' >layouts
                                            <ul>
                                                <li className='py-1 list-icon-none' >view all home</li>
                                                <li className='py-1 list-icon-none' >the english garden collection  </li>
                                                <li className='py-1 list-icon-none' >the city collection</li>
                                                <li className='py-1 list-icon-none' >the aoud collection</li>
                                                <li className='py-1 list-icon-none' >candles</li>
                                                <li className='py-1 list-icon-none' >reed diffusers</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                              
                       
                            <li className='list-icon-none'>
                                <Link className='custom-font-size text-uppercase cutom-color py-4 custom-font-weight text-decoration-none custom-padding-shop ' to="/">gifting</Link>
                            </li>
                        </ul>

                    </div>


                    <div>
                        <Link to="/">
                            <img className='img-fluid custom-width py-2' src={logoImage}  alt="" />
                        </Link>
                    </div>

                    <div>
                        <ul className=' icon-menu-list justify-content-between align-items-center gap-4 m-0'>
                            <li onClick={() => CarthandelFunc()} className='text-uppercase py-3 cursor-pointer custom-font-size list-icon-none '>
                                <Link className='position-relative text-decoration-none text-dark'>
                                    <span className='custom-font-weight'>cart</span>
                                    {
                                        cartItems?.length > 0 ? (
                                            <small className='position-absolute  translate-middle fs-small text-danger'>{cartItems.length}</small>
                                        ) : null
                                    }
                                </Link>
                            </li>
                            <li className='custom-font-size py-3 cursor-pointer list-icon-none '>
                                <Link to="/wislist" className='text-decoration-none text-dark'>
                                    <span className='custom-font-weight'> <i className="fa-regular fa-heart "></i> </span>
                                    {
                                        dataWislist?.length > 0 ? (
                                            <small className='translate-middle position-absolute top-end fs-small text-danger'>{dataWislist.length}</small>
                                        ) : null
                                    }
                                </Link>
                            </li>
                            <li className='custom-font-size cursor-pointer py-3 list-icon-none'>
                                {
                                    isLoggedIn ? (
                                        <div className='position-relative profile-hover-navbar'>
                                            <Link className='text-dark  fs-small'>
                                                <i className="fa-regular fa-user"></i>
                                            </Link>
                                            <div className='dropdwon-profile-navabar'>
                                                <button className='custom-dropdwon-profile text-capitalize fs-small'>
                                                    <Link to="/profile" className='text-decoration-none text-dark'>
                                                        Profile
                                                    </Link>
                                                    <button className=' text-capitalize  fs-small border-0 py-2' onClick={handleLogout}>Logout</button>
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link className='text-decoration-none text-dark text-uppercase fs-small' to="/login">Login</Link>
                                    )
                                }

                            </li>
                            <li className='custom-font-size list-icon-none'><i className="fa-solid fa-magnifying-glass"></i></li>
                            <li className='list-icon-none cursor-pointer'>
                                <Link className='text-dark py-4'><i className="fa-solid fa-bars"></i></Link>
                            </li>

                        </ul>
                        <div className='bars-icon-display'>
                            <div className='d-flex gap-2 align-items-center'>
                                <div>
                                    <Link className='text-dark' to="/wislist">
                                        <i className="fa-regular fa-heart"></i>
                                        {
                                            dataWislist?.length > 0 ? (
                                                <small className='translate-middle position-absolute top-end fs-small text-danger'>{dataWislist.length}</small>
                                            ) : null
                                        }
                                    </Link>
                                </div>
                                <div onClick={() => CarthandelFunc()}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    {
                                        cartItems?.length > 0 ? (
                                            <small className='position-absolute  translate-middle fs-small text-danger'>{cartItems.length}</small>
                                        ) : null
                                    }
                                </div>
                                <div>
                                    <Link className='text-dark' to="/login">
                                        <i className="fa-regular fa-user"></i>
                                    </Link>
                                </div>
                                <div onClick={toggleNavbar}>
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <Cart />
        </nav>

    )

}

export default Navbar
