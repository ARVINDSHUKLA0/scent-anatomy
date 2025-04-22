import React from 'react'
import '../PagesStyle/About.css'
import Navbar from '../Components/Navbar' 
import AboutOneimg from '/assets/img/five.webp'
import AboutTwoimg from '/assets/img/seven.jpg'
import AboutProfileOne from '/assets/img/AboutProfileOne.webp'
import Footer from '../Components/Footer'

const About = () => {
    return (
   <>
     <Navbar/>
     <section> 
          <div className='background-imges-about-banner'></div>
     </section>

     <section className='py-lg-5 py-4 px-2'>
         <div className="container">
               <div className="row align-items-center m-0">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <h2>Our Story</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias sunt possimus nam dicta facere accusamus similique nostrum dignissimos voluptatum, ad blanditiis voluptate obcaecati dolores, velit quidem voluptatibus magni non alias saepe distinctio nesciunt quaerat. Quidem nihil facilis similique, at harum cumque eum ad placeat porro, eligendi sit natus et omnis qui nesciunt? Praesentium ipsa impedit esse laborum eaque nesciunt deserunt iure, nemo id sit rem debitis sunt vel fuga sapiente, autem voluptatem nam maxime odit vero neque aliquam? Natus, accusantium! Incidunt dignissimos perferendis voluptate, soluta voluptates nihil officia eos porro? Incidunt tenetur est eveniet excepturi sunt, minima optio saepe?</p>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid' src={AboutOneimg} alt="" />
               </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                   <img className='img-fluid' src={AboutTwoimg} alt="" />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <h2>Our Story</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias sunt possimus nam dicta facere accusamus similique nostrum dignissimos voluptatum, ad blanditiis voluptate obcaecati dolores, velit quidem voluptatibus magni non alias saepe distinctio nesciunt quaerat. Quidem nihil facilis similique, at harum cumque eum ad placeat porro, eligendi sit natus et omnis qui nesciunt? Praesentium ipsa impedit esse laborum eaque nesciunt deserunt iure, nemo id sit rem debitis sunt vel fuga sapiente, autem voluptatem nam maxime odit vero neque aliquam? Natus, accusantium! Incidunt dignissimos perferendis voluptate, soluta voluptates nihil officia eos porro? Incidunt tenetur est eveniet excepturi sunt, minima optio saepe?</p>
                 </div>
               </div>
            
         </div>
     </section>

     <section className='bg-light'>
          <div className="container-fluid px-2 py-5"> 
              <div className="row m-0">
                 <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                 <i className="fa-solid fa-pen-ruler fs-2 text-muted"></i>
                    <h4>Degign</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat architecto obcaecati vero animi?</p>
                 </div>
                 <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                 <i className="fa-solid fa-asterisk fs-2 text-muted"></i>
                    <h3>innovation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat architecto obcaecati vero animi?</p>
                 </div>
                 <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                    <i className="fa-solid fa-truck fs-3 text-muted"></i>
                    <h3>journey</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat architecto obcaecati vero animi?</p>
                 </div>
              </div>
          </div>
     </section>
     <section className='py-lg-5'>
           <div className="container-fluid">
               <div className="row m-0">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                    <div className='px-3'>
                      <img className='img-fluid rounded-4' src={AboutProfileOne} alt="" />
                      <p className='m-0 text-uppercase pt-3 fw-bold'>freya mccarthy</p>
                      <p className='text-uppercase m-0'>ceo</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                    <div className='px-3'>
                      <img className='img-fluid rounded-4' src={AboutProfileOne} alt="" />
                      <p className='m-0 text-uppercase pt-3 fw-bold'>freya mccarthy</p>
                      <p className='text-uppercase m-0'>ceo</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                    <div className='px-3'>
                      <img className='img-fluid rounded-4' src={AboutProfileOne} alt="" />
                      <p className='m-0 text-uppercase pt-3 fw-bold'>freya mccarthy</p>
                      <p className='text-uppercase m-0'>ceo</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center">
                    <div className='px-3'>
                      <img className='img-fluid rounded-4' src={AboutProfileOne} alt="" />
                      <p className='m-0 text-uppercase pt-3 fw-bold'>freya mccarthy</p>
                      <p className='text-uppercase m-0'>ceo</p>
                      </div>
                  </div>
               </div>
           </div>
     </section>
     <Footer/>
   </>
)
}

export default About