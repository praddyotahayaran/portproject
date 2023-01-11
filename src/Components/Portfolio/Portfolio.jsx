import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import port0 from '../../img/port0.png'
import port1 from '../../img/port1.png'
import port2 from '../../img/port2.png'
import port3 from '../../img/port3.png'
import 'swiper/css'


const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>

      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolioSlider'
      >
        <SwiperSlide>
          <a href="https://ecommerceweb.pages.dev/" target={'blank'}>
            <img src={port0} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://praddyotahayaran.github.io/foodtrunk/" target={'blank'}>
            <img src={port1} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://praddyotahayaran.github.io/cryptoapp/" target={'blank'}>
            <img src={port2} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://praddyotahayaran.github.io/praddyota-amazon/" target={'blank'}>
            <img src={port3} alt="" />
          </a>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Portfolio