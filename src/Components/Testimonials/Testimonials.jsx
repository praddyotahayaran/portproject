import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import pp1 from '../../img/profile1.jpg'
import pp2 from '../../img/profile2.jpg'
import pp3 from '../../img/profile3.jpg'
import pp4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'


const Testimonials = () => {

    const clients = [
        {
            img: pp1,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde earum laboriosam tenetur voluptate, corrupti similique voluptatibus. Ratione, modi consequatur quae corrupti nesciunt dignissimos quis. Delectus blanditiis tempora dolorem adipisci modi!"
        },
        {
            img: pp2,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde earum laboriosam tenetur voluptate, corrupti similique voluptatibus. Ratione, modi consequatur quae corrupti nesciunt dignissimos quis. Delectus blanditiis tempora dolorem adipisci modi!"
        },
        {
            img: pp3,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde earum laboriosam tenetur voluptate, corrupti similique voluptatibus. Ratione, modi consequatur quae corrupti nesciunt dignissimos quis. Delectus blanditiis tempora dolorem adipisci modi!"
        },
        {
            img: pp4,
            review:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde earum laboriosam tenetur voluptate, corrupti similique voluptatibus. Ratione, modi consequatur quae corrupti nesciunt dignissimos quis. Delectus blanditiis tempora dolorem adipisci modi!"
        }
    ]

    return (
        <div className="testimonialWrapper" id='Testimonials'>
            {/* Heading */}
            <div className="testimonialHeading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me</span>
            </div>

            {/* Slider */}

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>

                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials