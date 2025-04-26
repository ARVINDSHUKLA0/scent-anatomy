import React, { useContext, useEffect, useState } from 'react'
import '../PagesStyle/Home.css'
import Navbar from '../Components/Navbar'
import HeaderSlider from '../Components/HeaderSlider'
import Product from '../Api/Product'
import timelessImage from '/assets/img/timeless.webp'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { AddtoCartWarpper } from '../Context/AddToCartContext'
import { WisListdata } from '../Context/WislistContext'

const Home = () => {
  const { addToCartFunc } = useContext(AddtoCartWarpper)
  const { WislistFunc } = useContext(WisListdata)
  const [categoryProduct, setCategoryProduct] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [filter, setFilter] = useState('Bhakti')
  const [datafilter, setDatafilter] = useState([])



  const categoryShow = () => {
    setCategoryProduct(!categoryProduct);
  };

  const filterShow = () => {
    setFilterPrice(!filterPrice);
  }


  useEffect(() => {
    if (filter === '') {
      setDatafilter([]);
    } else {
      const dataValue = Product.filter(item => item.category == filter);
      setDatafilter(dataValue);
    }
  }, [filter])
  const productsToShow = filter === '' ? Product : datafilter;


  return (
    <>
      <Navbar />
      <HeaderSlider />

      <section>
        <div className="container mb-3 overflow-hidden ">
          <div className="d-flex align-items-center justify-contant-between  mb-5 mt-5">
            <div className="position-relative flex-grow-1">
              <span className="d-lg-none d-block cursor-pointer">
                <span
                  className="text-dark text-uppercase main-font-weight fs-small"
                  onClick={categoryShow}
                >
                  Category <i className="fa-solid fa-caret-up text-dark"></i>
                </span>
              </span>
              <div
                className={`categoryWrap mt-3 ${categoryProduct ? "open" : ""}`}

              >
                <ul className="d-lg-flex py-4 d-block gap-3 p-0">
                 
                  <li  onClick={() => setFilter('Bhakti')} className="text-uppercase d-lg-block d-none cursor-pointer  list-icon-none fs-mediam-font-size">
                    Bhakti Plush
                  </li>
                  <li  onClick={() => setFilter('Divine')} className="text-uppercase text-color-cetegory cursor-pointer list-icon-none fs-mediam-font-size">
                    Divine Oils
                  </li>
                  <li  onClick={() => setFilter('Gifting')} className="text-uppercase text-color-cetegory cursor-pointer list-icon-none fs-mediam-font-size">
                    Gifting Collection
                  </li>
                  <li  onClick={() => setFilter('Ritual')} className="text-uppercase text-color-cetegory cursor-pointer list-icon-none fs-mediam-font-size">
                    Ritual Essentials
                  </li>
                  <li  onClick={() => setFilter('Sacred')} className="text-uppercase text-color-cetegory cursor-pointer list-icon-none fs-mediam-font-size">
                    Sacred Powders
                  </li>
                  <li  onClick={() => setFilter('SacredScents')} className="text-uppercase text-color-cetegory cursor-pointer list-icon-none fs-mediam-font-size">
                    Sacred Scents
                  </li>
                  <li  onClick={() => setFilter('SringarBox')} className="text-uppercase text-color-cetegory cursor-pointer list-icon-none fs-mediam-font-size">
                    Sringar Box
                  </li>
                  <li onClick={() => setFilter('TempleDecor')} className="text-uppercase text-color-cetegory cursor-pointer list-icon-none fs-mediam-font-size">
                    Temple Aromatics
                  </li>
                </ul>
              </div>
            </div>
            <div className='position-relative'>
              <ul className='m-0'>
                <li className='text-uppercase main-font-size main-font-weight list-icon-none fs-mediam-font-size cursor-pointer' onClick={filterShow}>
                  filter
                  <i className="fa-solid fa-caret-down px-2"></i>
                  <div className={`filter-dropdown  ${filterPrice ? "open" : ""}`}>
                    <ul className='p-4'>
                      <li className='py-1 list-icon-none fs-small text-white'>price range</li>
                      <li className='py-1 list-icon-none fs-small text-white'>all</li>
                      <li className='py-1 list-icon-none fs-small text-white'>$0-$10</li>
                      <li className='py-1 list-icon-none fs-small text-white'>$10-$20</li>
                      <li className='py-1 list-icon-none fs-small text-white'>$20-$30</li>
                      <li className='py-1 list-icon-none fs-small text-white'>$30-$40</li>
                      <li className='py-1 list-icon-none fs-small text-white'>$40+</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='px-2'>
            <div className="row">
              {
                productsToShow.map((itemValue, index) => (
                  <div className='col-lg-3 col-md-4 col-sm-6 col-6  text-center cursor-pointer  ' key={index}>

                    <div className="position-relative custom-overfolw-hidden product-item ">
                      <Link to={`/productbuy/${itemValue.id}`} className='text-decoration-none '>
                      <div className='custom-height-product'>
                        <img className='img-fluid' src={itemValue.thumbnailImage} width={260} alt="Image" />
                        </div>
                      </Link>
                      <div
                        className="position-absolute product-wrapper d-flex align-items-center justify-content-center ">
                        <span className="d-flex align-items-center h-100 pe-3 ">
                          <p className="bg-dark text-white  mb-0  h-100 px-lg-3 px-2 pt-1  text-center text-uppercase fs-small">Quick Look</p>
                          <Link onClick={() => WislistFunc(itemValue.id)} >
                            <i className="fa-regular fa-heart h-100 custom-padding-icon-heart  bg-secondary text-white fs-mediam-font-size "></i>
                          </Link>
                        </span>
                      </div>
                    </div>

                    <div className="text-center ">
                      <p className="mb-2 text-uppercase text-dark mt-3 custom-font-size-and-weight px-2 fw-bold">{itemValue.title}</p>
                      <div className="product-btn-price w-100 position-relative overflow-x-hidden ">
                        <div className="position-absolute top-0 w-100 text-center product-add-cart"><button onClick={() => addToCartFunc(itemValue.id)}
                          className=" border-0 text-uppercase btn-content bg-white custom-font-size-and-weight">add to cart</button></div>
                        <div className="w-100  text-center position-absolute top-0 product-price custom-font-size-and-weight text-dark"> &#x20B9; {itemValue.price}</div>
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section>
        <img className='w-100' src={timelessImage} alt="Image" />
      </section>

      <section className="py-5 px-2 custom-bg overflow-hidden">
        <div className="container">
          <p className='newslatter-communty-font m-0 '>JION OUR COMMUNTY</p>
          <div className="row align-items-center">
            <div className="col-md-4">
              <p className="newslatter-custom-style m-0 ps-2">NEWSLETTER</p>
            </div>
            <div className="col-md-8 col-12 px-2">
              <div className="border border-dark rounded-pill d-flex justify-content-between gap-2 ps-3">
                <input type="text" name="your email" id="" className="flex-grow-1 d-block border-0 bg-transparent newsletter-input" placeholder="Enter Email" />
                <span className="newslatetr-sumbit-btn   rounded-pill mb-0 text-white px-4 py-2">Submit</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home