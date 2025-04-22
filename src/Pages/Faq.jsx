import React, { useState } from 'react'
import '../PagesStyle/Faq.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer' 
import FaqOne from '/assets/img/faqOne.jpg'
import FaqTwo from '/assets/img/FaqTwo.jpg'
import FaqSevgOne from '/assets/img/FaqSevgOne.webp'
import FaqSevgTwo from '/assets/img/faqSevgTwo.webp'
import FaqSevgThree from '/assets/img/faqSevgThree.webp'

const Faq = () => {


    const FaqArr = [
        { id: 1, name: 'What age range is this toy suitable for?', specation: 'Fusce id blandit blandit finibus eros. Vestibulum eu maximus turpis. Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis. Ut enim massa, malesuad mi. Maecenas in odo lorem.Maecenas in dictum at commodo lorem.', headding: 'Are there any small parts or choking hazards to be aware of?', title: 'Ut venenatis tellus in metus vulputate eu scelerisque. Etiam sit amet nisl purus in mollis. Pretium lectus quam id leo in vitae turpis massa.' },
        { id: 2, name: 'Is this toy made from safe and non-toxic materials?', specation: 'Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis. Ut enim massa, malesuad mi. Maecenas in odo lorem.Maecenas in dictum at commodo lorem. Fusce id blandit blandit finibus eros. Vestibulum eu maximus turpis.', headding: 'Can this toy be used for educational purposes?', title: 'Quis vel eros donec ac odio tempor orci dapibus. Suspendisse sed nisi lacus sed viverra. Suspendisse interdum consectetur libero id faucibus.' },
        { id: 3, name: 'Can this toy be washed or cleaned easily?', specation: 'At enim massa, malesuad mi. Maecenas in odo lorem.Maecenas in dictum at commodo lorem. Fusce id blandit blandit finibus eros. Vestibulum eu maximus turpis. Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis.', headding: 'Is this toy compatible with other toys or accessories?', title: 'Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Gravida in fermentum et sollicitudin ac orci phasellus.' },
        { id: 4, name: 'Does this toy require batteries?', specation: 'Blandit fusce id blandit finibus eros. Vestibulum eu maximus turpis. Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis. Ut enim massa, malesuad mi. Maecenas in odo lorem.Maecenas in dictum at commodo lorem.', headding: 'Are there any assembly or setup instructions for this toy?', title: 'Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Eu consequat ac felis donec et odio pellentesque.' },
        { id: 5, name: 'Is there a warranty or guarantee available for this toy?', specation: 'Maecenas in odo lorem.Maecenas in dictum at commodo lorem. Fusce id blandit blandit finibus eros. Vestibulum eu maximus turpis. Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis. Ut enim massa, malesuad mi.', headding: 'What is the return or exchange policy for toys purchased from your store?', title: 'Lorem sed risus ultricies tristique nulla. Dignissim sodales ut eu sem integer vitae.Sed risus pretium quam vulputate dignissim suspendisse in est ante. ' },
    ]
    const [activeFaq, setActiveFaq] = useState(null);
    const [faqopen, setFaqOpen] = useState(null)

    const faqtogglefunc = (id) => {
        setFaqOpen(faqopen === id ? null : id)
    }

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };



    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row m-0 ">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 pt-lg-5 bg-light rounded-4 mb-lg-4 px-2 order-2 order-lg-1">
                        <h5 className='text-capitalize fw-bold ps-lg-3'>about werk.co</h5>
                        <p className='ps-lg-3'>Augue mauris augue neque gravida in fermentum et. A arcu cursus <br /> vitae congue mauris rhoncus aenean vel elit. </p>
                        {FaqArr.map((item) => (
                            <button
                                key={item.id}
                                className={`faqbutton-toggle py-lg-3 py-md-3 py-sm-2  mb-4 w-100 ${activeFaq === item.id ? "open" : ""}`}
                                onClick={() => toggleFaq(item.id)}
                            >
                                <div className="button-content">
                                    <div className="d-flex justify-content-between">
                                        <span className=" key-font-size">{item.name}</span>
                                        <span className="arrow">
                                            {activeFaq === item.id ? (
                                                <i className="fa-solid fa-arrow-up text-secondary"></i>
                                            ) : (
                                                <i className="fa-solid fa-arrow-right text-secondary"></i>
                                            )}
                                        </span>
                                    </div>
                                    {activeFaq === item.id && <div className="mt-2"><p className='text-start'>{item.specation}</p></div>}
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12  order-1 order-lg-2 ">
                        <div className='img-set-faq'>
                            <img className='img-fluid' src={FaqOne} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row m-0 ">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className='img-set-faq'>
                            <img className='img-fluid' src={FaqTwo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 pt-lg-5 bg-light px-2 rounded-4 mb-lg-4">
                        <h5 className='text-capitalize fw-bold ps-lg-3'>Shipping & Policy</h5>
                        <p className='ps-lg-3'>Aliquam vestibulum mauris eu velit imperdiet venenatis. Class <br /> aptenttaciti sociosqu ad litora torquent per conubia nostra, </p>
                        {FaqArr.map((item) => (
                            <button
                                key={item.id}
                                className={`faqbutton-toggle  py-sm-2 mb-4 w-100 ${faqopen === item.id ? "open" : ""}`}
                                onClick={() => faqtogglefunc(item.id)}
                            >
                                <div className="button-content">
                                    <div className="d-flex justify-content-between">
                                        <span className=" key-font-size">{item.headding}</span>
                                        <span className="arrow">
                                            {faqopen === item.id ? (
                                                <i className="fa-solid fa-arrow-up text-secondary"></i>
                                            ) : (
                                                <i className="fa-solid fa-arrow-right text-secondary"></i>
                                            )}
                                        </span>
                                    </div>
                                    {faqopen === item.id && <div className="mt-2"><p className='text-start'>{item.title}</p></div>}
                                </div>
                            </button>
                        ))}
                    </div>

                </div>
            </div>
            <div>
                <div className="container-fluid mt-4  px-2">
                    <div className="row m-0">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                            <div className='cutom-flexibe-payment bg-light me-md-3 py-4'>
                                <img className='img-fluid' src={FaqSevgOne} width={60} alt="" />
                                <h5 className='fw-bold'>Flexible Payment</h5>
                                <p>Id semper risus in hendrerit gravida rutrum quisque. Eu lobortis elementum nibh tellus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                            <div className='cutom-flexibe-payment bg-light me-md-3 py-4'>
                                <img  className='img-fluid' src={FaqSevgTwo} width={60} alt="" />
                                <h5 className='fw-bold'>Online support</h5>
                                <p>Amet cursus sit amet dictum sit amet justo donec. Auctor neque vitae tempus quam.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                            <div className='cutom-flexibe-payment bg-light py-4'>
                                <img className='img-fluid ' src={FaqSevgThree} width={60} alt="" />
                                <h5 className='fw-bold'>in-store Pickup</h5>
                                <p>Ultricies integer quis auctor elit sed vulputate mi sit. Eu mi bibendum neque egestas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq