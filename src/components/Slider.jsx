import React from 'react'
import Slick from "react-slick"
import './Slider.scss'

const Slider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    dotsClass: 'slider__dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="slider" >
      <Slick {...settings}>
        <div className="slider__div">
          <img className="slider__img" src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1612148202_c0de41e573e448418c975725fa4dfca8.jpeg" alt="Slider img" />
        </div>
        <div className="slider__div">
          <img className="slider__img" src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1612145101_e2948ab8099b4bfdb420a125f0b454d9.jpeg" alt="Slider img" />
        </div>
        <div className="slider__div">
          <img className="slider__img" src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1598344219_12cbef4ed63f4726ab39a4ff57ed726c.jpeg" alt="Slider img" />
        </div>
        <div className="slider__div">
          <img className="slider__img" src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1611874578_aee0ebc9ca5b4e5a955a8205a5800f78.jpeg" alt="Slider img" />
        </div>
        <div className="slider__div">
          <img className="slider__img" src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1611871031_fcfb6a4d00c74c4894ebc4d74e4f14e2.jpeg" alt="Slider img" />
        </div>
        <div className="slider__div">
          <img className="slider__img" src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1606512828_fbe43115a3ab4204b22817dc56b30bc4.jpeg" alt="Slider img" />
        </div>
        <div className="slider__div">
          <img className="slider__img" src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1605565746_7130d1f47dd64455acb3afda14cb8170.jpeg" alt="Slider img" />
        </div>
      </Slick>
    </div>
  )
}

export default Slider
