import React, { useState } from 'react'
import '../PagesStyle/SignUp.css'
import Logo from '/assets/img/logo.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { userData } from '../Database/Data'
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const SingUpSubmitFucn = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("password do not match")
            return;
        }
        const newUserData = {
            id : userData.length + 1,
            name,
            email,
            phone,
            password,
            token : email,
        };
        userData.push(newUserData);
        navigate('/login')

    }
    return (
        <>
            <section className="SignUp-section  my-100">
                <div className='container-fluid px-lg-3 px-2 d-flex justify-content-center align-items-center h-100'>
                    <div className='SignUp-container'>
                        <div className='text-center'>
                            <div>
                                <Link to="/">
                                <img src={Logo} alt="" width={200} />
                                </Link>
                            </div>
                            <h5>Sign up</h5>
                        </div>
                        <div>
                            <form onSubmit={SingUpSubmitFucn} className='py-4' action="">
                                <div className="form-group mb-3">
                                    <label className='text-capitalize' htmlFor="text">Name</label>
                                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} id="name" className="form-control py-2" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='text-capitalize' htmlFor="email">email</label>
                                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} id="email" className="form-control py-2" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='text-capitalize' htmlFor="phone">Phone</label>
                                    <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} id="phone" className="form-control py-2" placeholder="Enter your Phone" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='text-capitalize' htmlFor="password">password</label>
                                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} id="password" className="form-control py-2" placeholder="Enter your password" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label className='text-capitalize' htmlFor="password">Confirm password</label>
                                    <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} id="Confirmpassword" className="form-control py-2" placeholder="Enter your Confirm password" required />
                                </div>
                                <div className='mb-3'>
                                    <button className='login-btn-normal w-100 text-capitalize'>Sign Up</button>
                                </div>
                                    <div className='text-md-end'>
                                        <Link className='text-decoration-none text-dark fw-bold' to="/login">
                                            <p>Already have an account? Sign in</p>
                                        </Link>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
