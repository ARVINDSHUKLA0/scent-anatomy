import React, { useContext, useEffect, useState } from 'react'
import '../ComponentsStyle/Navbar.css'
import NavbarImage from '/assets/img/NavbarImage.jpg'
import logoImage from '/assets/img/logo.png'
import AsidebarNavImage from '/assets/img/asidenavbar.jpg'
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
    const [asideBar, setsideBar] = useState(false);

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

    const Sidebarremove = () => {
        setsideBar(false);
    }

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

                            <li onClick={() => toggleDropdownMenu("candles")} className='list-item cursor-pointer list-icon-none pt-1 item-sm-py  custom-font-size text-uppercase custom-font-weight'>
                                <Link className='cutom-color text-decoration-none py-4'>candles</Link>
                                <i className={`fa-solid fa-chevron-down mx-3 icon-list listIcon ${dropName === 'candles' && listIcon ? 'listIconrotated' : ''}`}></i>
                                <div className={`drop-dwon ${(dropName === 'candles') ? 'dropToggleMenu' : ''}`}>
                                    <ul className='d-sm-flex d-block justify-content-between box '>
                                        <li className='list-icon-none'>
                                            <ul className='custom-font-size text-uppercase'>
                                                <li className='py-1 list-icon-none' >view all home</li>
                                                <li className='py-1 list-icon-none' >the english garden collection  </li>
                                                <li className='py-1 list-icon-none' >the city collection</li>
                                                <li className='py-1 list-icon-none' >the aoud collection</li>
                                                <li className='py-1 list-icon-none' >candles</li>
                                                <li className='py-1 list-icon-none' >reed diffusers</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <img className='img-set-width' src={NavbarImage} alt="image" />
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li onClick={() => toggleDropdownMenu("fragrances")} className='list-item pt-1 cursor-pointer list-icon-none item-sm-py  custom-font-size text-uppercase custom-font-weight '>
                                <Link className='text-decoration-none cutom-color py-4'>fragrances</Link>
                                <i className={`fa-solid fa-chevron-down mx-3 icon-list listIcon ${dropName === 'fragrances' && listIcon ? 'listIconrotated' : ''}`}></i>
                                <div className={`drop-dwon ${(dropName === 'fragrances') ? 'dropToggleMenu' : ''}`}>

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

                            <li onClick={() => toggleDropdownMenu("gifting")} className='list-item pt-1 cursor-pointer  list-icon-none  item-sm-py  custom-font-size text-uppercase custom-font-weight'>
                                <Link className=' cutom-color text-decoration-none py-4'>gifting</Link>
                                <i className={`fa-solid fa-chevron-down mx-3 icon-list listIcon ${dropName === 'gifting' && listIcon ? 'listIconrotated' : ''}`}></i>
                                <div className={`drop-dwon ${(dropName === 'gifting') ? 'dropToggleMenu' : ''}`}>
                                    <div className='d-sm-flex d-block justify-content-between box'>
                                        <div>
                                            <ul className='custom-font-size text-uppercase'>
                                                <li className='py-1 list-icon-none' > gift set builder</li>
                                                <li className='py-1 list-icon-none' > gift sets  </li>
                                                <li className='py-1 list-icon-none' > gifts for her </li>
                                                <li className='py-1 list-icon-none' >gifts for him</li>
                                                <li className='py-1 list-icon-none' >little luxuries</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <img className='img-set-width' src={NavbarImage} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* <li onClick={() => toggleDropdownMenu("featured")} className='list-item pt-1 cursor-pointer list-icon-none item-sm-py  custom-font-size text-uppercase custom-font-weight '>
                                <Link className=' cutom-color text-decoration-none py-4'>featured</Link>
                                <i className={`fa-solid fa-chevron-down mx-3 icon-list listIcon ${dropName === 'featured' && listIcon ? 'listIconrotated' : ''}`}></i>
                                <div className={`drop-dwon ${(dropName === 'featured') ? 'dropToggleMenu' : ''}`}>
                                    <ul className='d-sm-flex d-block justify-content-between box'>
                                        <li className='list-icon-none'>
                                            <ul className='custom-font-size text-uppercase'>
                                                <li className='py-1 list-icon-none' > aoud extraordinaire</li>
                                                <li className='py-1 list-icon-none' > our latest launches </li>
                                                <li className='py-1 list-icon-none' > scents for summer </li>
                                                <li className='py-1 list-icon-none' >best-sellers</li>
                                                <li className='py-1 list-icon-none' > bundle builder</li>
                                                <li className='py-1 list-icon-none' >gift sets</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <img className='img-set-width' src={NavbarImage} alt="image" />
                                        </li>
                                    </ul>
                                </div>
                            </li> */}

                            <li className='list-icon-none'>
                                <Link className='custom-font-size text-uppercase cutom-color py-4 custom-font-weight text-decoration-none custom-padding-shop ' to="/shop">Shop</Link>
                            </li>

                        </ul>

                    </div>


                    <div>
                        <Link to="/">
                            <img className='img-fluid custom-width py-2' src={logoImage} alt="" />
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
                                <Link className='text-dark py-4'><i onClick={Sidebaropen} className="fa-solid fa-bars"></i></Link>
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

                {asideBar && <div onClick={Sidebarremove} className='item-warrper-remove'></div>}


                <aside
                    className={` custom-height-aside aside-bg-color text-white sidebar-open-wrap top-0 ${asideBar ? 'open' : ''}`} >
                    <div className="row px-4 ">
                        <div className="col-lg-12 text-end py-1">
                            <span onClick={Sidebarremove} className="cursor-pointer">
                                <i className="fa-solid fa-xmark fs-5 pt-3 "></i>
                            </span>
                        </div>

                        <div className='text-center'>
                            <p className='text-uppercase custom-font-size pb-2'>welcome</p>
                            <h3>Advertising is the way great brands get to be great brands.</h3>
                            <div className="row px-5  py-3 cursor-pointer">
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>
                                <div className="col-lg-3 py-1">
                                    <div className='p-2'>
                                        <img className='img-fluid' src={AsidebarNavImage} alt="asideImage" />
                                    </div>
                                </div>

                            </div>

                            <div className='cursor-pointer'>
                                <p className='text-uppercase custom-font-size mb-3'>we are awesome follow us</p>
                                <ul className='d-flex justify-content-center gap-4'>
                                    <li className='list-icon-none'><i className="fa-brands fa-twitter"></i></li>
                                    <li className='list-icon-none'><i className="fa-brands fa-instagram"></i></li>
                                    <li className='list-icon-none'><i className="fa-brands fa-facebook-f"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <Cart />
        </nav>

    )

}

export default Navbar
