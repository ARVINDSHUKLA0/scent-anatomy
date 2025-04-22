import React from 'react'
import '../PagesStyle/Forget.css'
import Logo from '/assets/img/logo.png'
import { Link} from 'react-router-dom'
 
const Forget = () => { 

 
  return (
    <>
      <section className="forget-section">
        <div className='container-fluid px-lg-3 px-2 d-flex justify-content-center align-items-center h-100'>
          <div className='forget-container'>
            <div className='text-center'>
              <div>
                <Link to="/">
                <img src={Logo} alt="" width={200} />
                </Link>
              </div>
              <h5 className='text-capitalize '>forget your password</h5>
            </div>
            <div>
              <form  className='py-4' action="">
                <div className="form-group mb-3">
                  <label className='text-capitalize' htmlFor="email">email</label>
                  <input type="email" id="email" className="form-control py-2" placeholder="Enter your email" required />
                </div>
                 
                  <div>
                    <Link className='text-decoration-none text-dark fw-bold' to="/login">
                    <i className="fa-solid fa-arrow-left"></i>
                      <span className='ps-2'>Back to Log In</span>
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

export default Forget
