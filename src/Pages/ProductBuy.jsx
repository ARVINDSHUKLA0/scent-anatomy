import React, { useState } from 'react'
import '../PagesStyle/ProductBuy.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Product from '../Api/Product'
import ProductSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Components/Footer'

const ProductBuy = () => {
    const [key, setKey] = useState(false);
    const [Description, SetDescription] = useState(false);
    const [Specifications, SetSpecifications] = useState(false);
    const [otherinfo, Setotherinfo] = useState(false);
    const { id } = useParams();

    const DataProductBuy = Product.find(item => item.id === Number(id));


    console.log("hit", DataProductBuy);


    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };

    const KeyFuc = () => setKey(prevState => !prevState);
    const DescriptionFunc = () => SetDescription((prevState) => !prevState);
    const Specificationsfun = () => SetSpecifications((prevState) => !prevState);
    const otherinfoFunc = () => Setotherinfo((prevState) => !prevState);
    return (
        <>
            <Navbar />
            <section className='product-single-item-container'>
                <div className='product-buy-banner'></div>
            </section>
            <section className='container mb-4'>
                {DataProductBuy ? (
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 overflow-hidden">
                            <div className='product-buy-imges-center my-5 '>
                                <img className='img-fluid ' src={DataProductBuy.thumbnailImage} alt="" />
                            </div>
                            <div className='ps-1'>
                                <ProductSlide {...settings} className='custom-product-slick-slider'>
                                    {
                                        Product.map((ImgesProduct, i) => (
                                            <Link key={i} to="#">
                                                <div className='imgesProductSlick'>
                                                    <img className='img-fluid p-1 cutom-width-img' src={ImgesProduct.imges} alt="" />
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </ProductSlide>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12 ms-lg-5 ">
                            <div className='mt-5 mx-3'>
                                <h4>{DataProductBuy.title}</h4>
                                <p>{DataProductBuy.description}</p>
                                <p className='m-0'>&#x20B9; {DataProductBuy.price}</p>
                                <p> Size : {DataProductBuy.size}</p>
                                <div className='mb-3'>
                                    <button className='btn-product-minus'>-</button>
                                    <span className='btn-product-data-show'>1</span>
                                    <button className='btn-product-plus'>+</button>
                                </div>
                                <div>
                                    <button className='btn-addTo-cart text-capitalize'>add to cart</button>
                                    <button className='btn-buy-kow text-capitalize'>buy it kow</button>
                                </div>
                            </div>

                            <div>
                                <hr />
                                <div className='d-flex '>
                                    <span><i className="fa-solid fa-truck"></i></span>
                                    <p className='ps-3 m-0'>Free Shipping & Returns</p>
                                </div>

                                <button
                                    className={`expandable-button mb-4 mt-4 w-100 ${key ? 'open' : ''}`}
                                    onClick={KeyFuc}
                                >
                                    <div className="button-content">
                                        <div className="d-flex justify-content-between">
                                            <span className="description key-font-size text-capitalize">key features</span>
                                            <span className="arrow">
                                                {key ? (
                                                    <i className="fa-solid fa-arrow-up text-secondary"></i>
                                                ) : (
                                                    <i className="fa-solid fa-arrow-right text-secondary"></i>
                                                )}
                                            </span>
                                        </div>
                                        {key && (
                                            <div className="extra-content text-start text-secondary">
                                                <span >
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quos incidunt exercitationem quae adipisci dignissimos quia cumque fugiat reiciendis quam a inventore, placeat fuga harum. Animi libero exercitationem est laboriosam?</p>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </button>
                                <button
                                    className={`expandable-button mb-4 w-100 ${Description ? 'open' : ''}`}
                                    onClick={DescriptionFunc}
                                >
                                    <div className="button-content">
                                        <div className="d-flex justify-content-between">
                                            <span className="description key-font-size text-capitalize">Description</span>
                                            <span className="arrow">
                                                {Description ? (
                                                    <i className="fa-solid fa-arrow-up text-secondary"></i>
                                                ) : (
                                                    <i className="fa-solid fa-arrow-right text-secondary"></i>
                                                )}
                                            </span>
                                        </div>
                                        {Description && (
                                            <div className="extra-content text-start text-secondary">
                                                <span >
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quos incidunt exercitationem quae adipisci dignissimos quia cumque fugiat reiciendis quam a inventore, placeat fuga harum. Animi libero exercitationem est laboriosam?</p>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </button>
                                <button
                                    className={`expandable-button mb-4 w-100 ${Specifications ? 'open' : ''}`}
                                    onClick={Specificationsfun}
                                >
                                    <div className="button-content">
                                        <div className="d-flex justify-content-between">
                                            <span className="description key-font-size text-capitalize">Specifications</span>
                                            <span className="arrow">
                                                {Specifications ? (
                                                    <i className="fa-solid fa-arrow-up text-secondary"></i>
                                                ) : (
                                                    <i className="fa-solid fa-arrow-right text-secondary"></i>
                                                )}
                                            </span>
                                        </div>
                                        {Specifications && (
                                            <div className="extra-content text-start text-secondary">
                                                <span >
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quos incidunt exercitationem quae adipisci dignissimos quia cumque fugiat reiciendis quam a inventore, placeat fuga harum. Animi libero exercitationem est laboriosam?</p>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </button>
                                <button
                                    className={`expandable-button mb-4 w-100 ${otherinfo ? 'open' : ''}`}
                                    onClick={otherinfoFunc}
                                >
                                    <div className="button-content">
                                        <div className="d-flex justify-content-between">
                                            <span className="description key-font-size text-capitalize">otherinfo</span>
                                            <span className="arrow">
                                                {otherinfo ? (
                                                    <i className="fa-solid fa-arrow-up text-secondary"></i>
                                                ) : (
                                                    <i className="fa-solid fa-arrow-right text-secondary"></i>
                                                )}
                                            </span>
                                        </div>
                                        {otherinfo && (
                                            <div className="extra-content text-start text-secondary">
                                                <span >
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quos incidunt exercitationem quae adipisci dignissimos quia cumque fugiat reiciendis quam a inventore, placeat fuga harum. Animi libero exercitationem est laboriosam?</p>
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <h2>Product not found!</h2>
                    </div>
                )}
            </section>
            <Footer/>
        </>
    )
}

export default ProductBuy;
