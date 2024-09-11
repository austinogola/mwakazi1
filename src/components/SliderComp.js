import React from 'react';
import Slider from 'react-slick';
import '../styles/SliderComp.css'; // Import custom CSS
import safari1 from '../images/safari1.jpg'
import safari2 from '../images/safari2.jpg'

// Import slick-carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComp = () => {
  const images = [
    safari1,
    safari2
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
