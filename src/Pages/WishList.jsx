import React, { useContext } from 'react'
import '../PagesStyle/WishList.css'
import Navbar from '../Components/Navbar'
import { WisListdata } from '../Context/WislistContext'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'


const WishList = () => {
  const { dataWislist, RemoveWishListfunc } = useContext(WisListdata)
  return (
    <>
      <Navbar />
      <section className='my-4 wishlist-conatiner'>
        <div className="row align-items-center m-0">
          {
            dataWislist.length === 0 ? (
              <div className='my-100 text-center wishlist-not-data-showing'>
                <h3 className='text-danger custom-font-degin'>Noting found in wishlist</h3>
                <Link to="/shop" className='text-decoration-none text-white'>
                  <button className='btn-normal custom-width-btn w-100 my-3 text-capitalize '>
                    continue shopping
                  </button>
                </Link>

              </div>
            ) : (
              dataWislist.map((wishListdata, index) => (
                <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <div className='wishlist-min-height'>
                    <div className='position-relative px-2 py-2'>
                      <img className='img-fluid' src={wishListdata.thumbnailImage} alt="" />
                      <h6 className='m-0 text-wrap py-2 custom-padding-sm'>{wishListdata.title}</h6>
                      <p className='fs-small custom-padding-sm'> &#x20B9; {wishListdata.price}</p>
                      <div className='wishlist-remove-postion'>
                        <Link onClick={() => RemoveWishListfunc(wishListdata.id)}><i className="fa-solid fa-xmark text-dark fs-5 text-muted"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>

              )))
          }
        </div>
      </section>

      <Footer />

    </>
  )
}

export default WishList