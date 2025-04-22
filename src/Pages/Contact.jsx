import React, { useState } from 'react';
import '../PagesStyle/Contact.css';
import Navbar from '../Components/Navbar';
import ContactImges from '/assets/img/Contactimg.webp';
import Footer from '../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hit:', formData);
  };

  return (
    <>
      <Navbar />

      <section>
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
              <div className="py-lg-4">
                <p className="m-0 text-capitalize py-2">reach us</p>
                <p className="m-0 text-capitalize fw-bold enquiry-text text-danger">enquiry form</p>
                <p className="text-capitalize py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.
                </p>

                <form onSubmit={handleSubmit}>
                  <input className="w-100 mb-4 py-2 form-control" type="text" name="name" placeholder="name"
                    value={formData.name} onChange={handleChange} required />
                  <input className="w-100 mb-4 py-2 form-control" type="email" name="email" placeholder="email"
                    value={formData.email} onChange={handleChange} required />
                  <textarea className="w-100 mb-4 py-2 form-control" name="comment" rows={3} placeholder="comment" value={formData.comment} onChange={handleChange} required></textarea>
                  <div className="mb-3">
                    <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleChange}
                    />
                    <span className="ps-2">
                      Save my name, email, and website in this browser.
                    </span>
                  </div>
                  <button type="submit" className="text-capitalize login-btn-normal w-25 mt-3">
                    send
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
              <div className="p-lg-5">
                <img className="img-fluid" src={ContactImges} alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-3 pb-lg-5'>
        <div className='container-fluid'>
          <div className="row text-center m-0">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className=' custom-border-contact  my-4 p-lg-5 px-2 py-3 p-sm-4 '>
                <div className='conatct-btn-icon mb-3'>
                  <i className="fa-solid fa-phone "></i>
                </div>
                <h6 className='text-capitalize fw-bold'>phone</h6>
                <p className='m-0'>toll free: 0000 - 123 - 456789</p>
                <p className='m-0'>Fax: 0000 - 123 - 456789</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className='custom-border-contact  my-4 p-lg-5 px-2 py-3 p-sm-4 ms-lg-3'>
                <div className='conatct-btn-icon mb-3'>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h6 className='text-capitalize fw-bold'>email</h6>
                <p className='m-0'>info@example.com</p>
                <p className='m-0'>support@example.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className='custom-border-contact  my-4 p-lg-5 px-2 py-3 p-sm-4 ms-lg-3'>
                <div className='conatct-btn-icon mb-3'>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h6 className='text-capitalize fw-bold'>Address</h6>
                <p className='m-0'>No: 58 A, East Madison Street,</p>
                <p className='m-0'>Baltimore, MD, USA 4508</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
