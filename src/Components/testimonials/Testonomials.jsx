import React from "react";
import av1 from '../../assets/avatar1.jpg'
import av2 from '../../assets/avatar2.jpg'
import av3 from '../../assets/avatar3.jpg'
import av4 from '../../assets/avatar4.jpg'
import './review.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testonomials = () => {
  return (
    <section id="testimonial">
      <h5>reviews</h5>
      <h2>Testimonials</h2>
      <Swiper  spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        
     
      className="container testimonial-container">
        <SwiperSlide className="test-card">
          <div className="person-card">
            <img src={av1} alt="" />
          </div>
          <h5 className="client-name-h5">Shubham archiver</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veniam distinctio dolor ad totam exercitationem. Voluptates culpa
            fuga natus labore ullam, consequatur ratione laborum repudiandae
            nisi molestias architecto harum magnam ducimus eum! Reprehenderit,
            nemo?
          </small>
        </SwiperSlide>
        <SwiperSlide className="test-card">
          <div className="person-card">
            <img src={av2} alt="" />
          </div>
          <h5 className="client-name-h5">Shubham archiver</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veniam distinctio dolor ad totam exercitationem. Voluptates culpa
            fuga natus labore ullam, consequatur ratione laborum repudiandae
            nisi molestias architecto harum magnam ducimus eum! Reprehenderit,
            nemo?
          </small>
        </SwiperSlide>
        <SwiperSlide className="test-card">
          <div className="person-card">
            <img src={av3} alt="" />
          </div>
          <h5 className="client-name-h5">Shubham archiver</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veniam distinctio dolor ad totam exercitationem. Voluptates culpa
            fuga natus labore ullam, consequatur ratione laborum repudiandae
            nisi molestias architecto harum magnam ducimus eum! Reprehenderit,
            nemo?
          </small>
        </SwiperSlide>
        <SwiperSlide className="test-card">
          <div className="person-card">
            <img src={av4}alt="" />
          </div>
          <h5 className="client-name-h5">Shubham archiver</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veniam distinctio dolor ad totam exercitationem. Voluptates culpa
            fuga natus labore ullam, consequatur ratione laborum repudiandae
            nisi molestias architecto harum magnam ducimus eum! Reprehenderit,
            nemo?
          </small>
        </SwiperSlide>
      
      </Swiper>
    </section>
  );
};

export default Testonomials;
