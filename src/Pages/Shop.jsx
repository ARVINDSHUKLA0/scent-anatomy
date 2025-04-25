import React, { useContext, useEffect, useState } from 'react';
import '../PagesStyle/Shop.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Product from '../Api/Product';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { AddtoCartWarpper } from '../Context/AddToCartContext';
import { WisListdata } from '../Context/WislistContext';



const Shop = () => {
    const { addToCartFunc } = useContext(AddtoCartWarpper)
    const { WislistFunc } = useContext(WisListdata)
    const [category, setCategory] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;


    useEffect(() => {
        const sorted = Product
            .filter(item => (category ? item.category === category : true))
            .sort((a, b) => {
                if (sortBy === 'lowToHigh') {
                    return a.price - b.price;
                } else if (sortBy === 'highToLow') {
                    return b.price - a.price;
                } else if (sortBy === 'newestFirst') {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                } else if (sortBy === 'oldestFirst') {
                    return new Date(a.createdAt) - new Date(b.createdAt);
                } else if (sortBy === 'popularity') {
                    return b.popularity - a.popularity;
                } else {
                    return 0;
                }
            });

        setFilteredProducts(sorted);
    }, [category, sortBy]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePagination = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <>
            <Navbar />
            <section className="px-lg-5 px-3 py-2">
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12 bg-light rounded-3">
                            <div className="postion-sticky-cetegry py-lg-4">
                                <div className="border-bottom pb-3 mb-3">
                                    <h4 style={{ fontFamily: 'cursive' }} className="mb-3">Gender</h4>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="allcategory"
                                            value=""
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="allcategory" className="ps-2 fs-6">
                                            All
                                        </label>
                                    </div>

                                   

                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="Divine"
                                            value="Divine"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="Divine" className="ps-2 fs-6">
                                            Divine Oils
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="bhakti"
                                            value="Bhakti"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="bhakti" className="ps-2 fs-6">
                                            Bhakti Plush
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="Gifting"
                                            value="Gifting"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="Gifting" className="ps-2 fs-6">
                                            Gifting Collection
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="Ritual"
                                            value="Ritual"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="Ritual" className="ps-2 fs-6">
                                            Ritual Essentials
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="Sacred"
                                            value="Sacred"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="Sacred" className="ps-2 fs-6">
                                            Sacred Powders
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="SacredScents"
                                            value="SacredScents"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="SacredScents" className="ps-2 fs-6">
                                            Sacred Scents
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="SringarBox"
                                            value="SringarBox"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="SringarBox" className="ps-2 fs-6">
                                            Sringar Box
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="category"
                                            id="TempleDecor"
                                            value="TempleDecor"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                        <label htmlFor="TempleDecor" className="ps-2 fs-6">
                                        Temple Aromatics
                                        </label>
                                    </div>
                                </div>

                                <div className="border-bottom pb-3 mb-3">
                                    <h4 className="mb-3" style={{ fontFamily: 'cursive' }}>Sort By</h4>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="popularity"
                                            value="popularity"
                                            onChange={(e) => setSortBy(e.target.value)}
                                        />
                                        <label htmlFor="popularity" className="ps-2 fs-6">
                                            Popularity
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center mb-1">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="lowToHigh"
                                            value="lowToHigh"
                                            onChange={(e) => setSortBy(e.target.value)}
                                        />
                                        <label htmlFor="lowToHigh" className="ps-2 fs-6">
                                            Low to High Price
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="highToLow"
                                            value="highToLow"
                                            onChange={(e) => setSortBy(e.target.value)}
                                        />
                                        <label htmlFor="highToLow" className="ps-2 fs-6">
                                            High to Low Price
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center ">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="newestFirst"
                                            value="newestFirst"
                                            onChange={(e) => setSortBy(e.target.value)}
                                        />
                                        <label htmlFor="newestFirst" className="ps-2 fs-6">
                                            Newest First
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center ">
                                        <input
                                            type="radio"
                                            name="sort"
                                            id="oldestFirst"
                                            value="oldestFirst"
                                            onChange={(e) => setSortBy(e.target.value)}
                                        />
                                        <label htmlFor="oldestFirst" className="ps-2 fs-6">
                                            Oldest First
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 col-12 ps-lg-3">
                            <div className="row m-0">
                                {currentProducts.map((itemValue, index) => (
                                    <div
                                        className="col-lg-3 col-md-4 col-sm-6 col-6 product-item text-center cursor-pointer"
                                        key={index}
                                    >
                                        <div className="position-relative overflow-hidden px-2">
                                            <Link to={`/productbuy/${itemValue.id}`} className="text-decoration-none">
                                                <img
                                                    className="img-fluid"
                                                    src={itemValue.thumbnailImage}
                                                    width={235}
                                                    alt="Image"
                                                />
                                            </Link>
                                            <div className="position-absolute product-wrapper d-flex align-items-center justify-content-center ">
                                                <span className="d-flex align-items-center h-100 ">
                                                    <p className="bg-dark text-white  mb-0  h-100 px-3 pt-1  text-uppercase fs-small">
                                                        Quick Look
                                                    </p>
                                                    <Link onClick={() => WislistFunc(itemValue.id)}>
                                                        <i className="fa-regular fa-heart h-100 custom-padding-icon-heart  bg-secondary text-white fs-mediam-font-size "></i>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="">
                                            <p className="mb-2 text-uppercase text-dark mt-3 custom-font-size-and-weight px-2 fw-bold">
                                                {itemValue.title}
                                            </p>
                                            <div className="product-btn-price w-100 position-relative overflow-x-hidden">
                                                <div className="position-absolute top-0 w-100 text-center product-add-cart" >
                                                    <button onClick={() => addToCartFunc(itemValue.id)} className="border-0 text-uppercase btn-content bg-white custom-font-size-and-weight">
                                                        add to cart
                                                    </button>
                                                </div>
                                                <div className="w-100 text-center position-absolute top-0 product-price custom-font-size-and-weight text-dark">
                                                    &#x20B9; {itemValue.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination className="justify-content-center">
                                <Pagination.First onClick={() => handlePagination(1)} disabled={currentPage === 1} />
                                <Pagination.Prev
                                    onClick={() => handlePagination(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />
                                <Pagination.Item>
                                    {currentPage}
                                </Pagination.Item>
                                <Pagination.Next
                                    onClick={() => handlePagination(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                />
                                <Pagination.Last onClick={() => handlePagination(totalPages)} disabled={currentPage === totalPages} />
                            </Pagination>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Shop;
