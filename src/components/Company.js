import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Company = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: 'linear',
  };

  const logos = [
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '11.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '20.png',
  ];
  return (
    <div className='text-left p-10'>
      <p className='text-green-800 text-6xl font-bold tracking-tight sm:text-5xl p-10'>
        Trusted By
      </p>

      <Slider {...settings} className='px-10'>
        {logos.map((logo, index) => (
          <div key={index} className='logo'>
            <img src={`/logos/${logo}`} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Company;
