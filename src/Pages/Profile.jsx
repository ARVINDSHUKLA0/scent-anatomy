import React, { useEffect, useState } from 'react'
import '../PagesStyle/Profile.css'
import Navbar from '../Components/Navbar'
import { userData } from '../Database/Data'
import Footer from '../Components/Footer'

const Profile = () => {
    const [user, setUser] = useState({})

    const ProfileFunc = () => {
        const tokenValue = localStorage.getItem('token')
        let user = userData.find(data => data.token === tokenValue)
        if (user) {
            setUser(user)
        }
    }

    useEffect(() => {
        ProfileFunc()
    }, [])
    return (
        <>
            <Navbar />

            <section>
                <div className='container py-lg-5'>
                    <div className="row m-0">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className='profile-data-user'>
                                <h5 className='text-capitalize fw-bold'>contact info</h5>
                                <div className="d-flex align-items-center">
                                    <ul className='m-0 p-0'>
                                        <li className='list-icon-none'><i className="fa-regular fa-user"></i> : </li>
                                        <li className='list-icon-none'><i className="fa-solid fa-envelope"></i> :</li>
                                        <li className='list-icon-none'><i className="fa-solid fa-phone"></i> : </li>
                                    </ul>
                                    <ul className='m-0 ps-2'>
                                        <li className='list-icon-none'>{user?.name}</li>
                                        <li className='list-icon-none'>{user?.email}</li>
                                        <li className='list-icon-none'>{user?.phone}</li>
                                    </ul>
                                </div>
                                <p>address</p>
                                <div className='dataUser-boxshodw'>
                                    <p className='m-0 p-2'>E-174, gandhi vihar, mukhrjee nagar  10092 , Arvind shukla</p>
                                </div>
                                <div className='dataUser-boxshodw'>
                                    <p className='p-2 m-0'>c-26, sector 65 201301 , <br /> Arvind Shukla</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                              <div className='profile-user-order'>
                                 <p>Your order history is empty. Place your first order to see it here!</p>
                              </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </>
    )
}

export default Profile