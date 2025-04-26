import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 

const Footer = () => {
    
 
    return (
        <>
            <div className='bg-light'>
                <div className='container py-4 '>
                    <div>
                        <ul className='d-flex align-items-center justify-content-center flex-wrap text-uppercase fs-12 fw-bolder cursor-pointer'>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>Bhakti Plush</li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>
                                <Link className='text-decoration-none text-dark'>Divine Oils</Link>
                            </li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>
                                <Link className='text-decoration-none text-dark'>Gifting Collection</Link>
                            </li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'> Sacred Powders</li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>
                                <Link className='text-decoration-none text-dark'>
                                Sacred Scents
                                </Link>
                            </li> 
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>Sringar Box</li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>Temple Aromatics</li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>
                                <Link className='text-decoration-none text-dark text-uppercase' to="/about">
                                   about us
                                </Link>
                            </li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>
                                <Link className='text-decoration-none text-dark text-uppercase' to="/faq">
                                   faq
                                </Link>
                            </li>
                            <li className='p-2 list-icon-none custom-font-size-and-weight'>
                                <Link className='text-decoration-none text-uppercase text-dark' to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className=' d-flex align-items-center justify-content-center mt-3 justify-content-center gap-4 cursor-pointer '>
                            <li className='list-icon-none'><i className="fa-brands fa-square-facebook"></i></li>
                            <li className='list-icon-none'><i className="fa-brands fa-tiktok"></i></li>
                            <li className='list-icon-none'><i className="fa-brands fa-instagram"></i></li>
                            <li className='list-icon-none'><i className="fa-brands fa-linkedin"></i></li>
                            <li className='list-icon-none'><i className="fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer