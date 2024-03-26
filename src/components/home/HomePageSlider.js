import React from 'react';
import Slider from 'react-slick';
import HomePageSlide from './HomePageSlide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    const slidesData = [
      {
        imageUrl: 'img/slides/image1.jpeg',
        Text: 'Button 1',
      },
      {
        imageUrl: 'img/slides/image2.jpeg',
        Text: 'Button 3',
      },
      {
        imageUrl: 'img/slides/image3.jpeg',
        Text: 'Button 5'
      },
    ];

    const slides = slidesData.map((slide, index) => (
      <HomePageSlide key={index} {...slide} />
    ));

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
}

export default HomePageSlider;
