import React, { useEffect, useState } from 'react'
import '../PagesStyle/Login.css'
import Logo from '/assets/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { userData } from '../Database/Data'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const LoginSubmitFunc = (e) => {
    e.preventDefault()
    const DataUser = userData.find(data => data.email === email && data.password === password)
    if (DataUser) {
      localStorage.setItem('token', DataUser.token)
      navigate('/')
    }
    else {
      console.log("error")
    }
  }
  useEffect(() => {
    console.log('hj', userData)
  }, [])
  return (
    <>
      <section className="login-section">
        <div className='container-fluid px-lg-3 px-2 d-flex justify-content-center align-items-center h-100'>
          <div className='login-container'>
            <div className='text-center'>
              <div>
                <Link to="/">
                <img src={Logo} alt="" width={200} />
                </Link>
              </div>
              <h5>Sign up</h5>
            </div>
            <div>
              <form onSubmit={LoginSubmitFunc} className='py-4' action="">
                <div className="form-group mb-3">
                  <label className='text-capitalize' htmlFor="email">email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control py-2" placeholder="Enter your email" required />
                </div>
                <div className="form-group mb-3">
                  <label className='text-capitalize' htmlFor="email">password</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control py-2" placeholder="Enter your email" required />
                </div>
                <div className='mb-3'>
                  <button className='login-btn-normal w-100 text-capitalize'>log in</button>
                </div>

                <div className='d-md-flex d-block justify-content-between align-items-center '>
               <Link to="/forget" className='text-decoration-none text-dark fw-bold'>
                   <p className='m-0'>Forget password?</p>
               </Link>

                  <div>
                    <Link className='text-decoration-none text-dark fw-bold' to="/signup">
                      <p>Don't have an account? Sign Up</p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
