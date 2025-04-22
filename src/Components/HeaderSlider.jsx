import React from 'react';
import '../ComponentsStyle/HeaderSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
  const settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const imgArr = ["slider1.jpeg", "slider2.jpeg", "slider3.jpeg"];

  return (
    <section className='slider-header-wrap'>
      <Slider {...settings} className='slider-container'>
        {imgArr.map((img, i) => (
          <div className='header-slider' key={i}>
            <img
              src={`/assets/img/${img}`}
              alt='dooziedo'
              loading='lazy'
              className='baner-img'
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeaderSlider;
