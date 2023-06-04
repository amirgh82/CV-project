import React from 'react'
import './Portfolio.css'
import Title from '../Dependencies/Titles/Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";



export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container">
                <Title>
                    {[
                        'Portfolio',
                        'Check In Our lastest Works'
                    ]}
                </Title>
                <ul className="portfolio-list">
                    <li className="portfolio-list__item">All Work</li>
                    <li className="portfolio-list__item">Illustration</li>
                    <li className="portfolio-list__item">Animation</li>
                    <li className="portfolio-list__item">App Ui</li>
                    <li className="portfolio-list__item">Web Ui</li>
                    <li className="portfolio-list__item">Social Media</li>
                    <li className="portfolio-list__item">Print Design</li>
                </ul>

                <div className="portfolio-content">
                    <Swiper
                        onSwiper={(swiper => console.log(swiper))}
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('Slide Chenged')}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src="/images/portfolio-1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/portfolio-2.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/portfolio-3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/portfolio-1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/portfolio-2.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/portfolio-3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/portfolio-1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/portfolio-2.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/portfolio-3.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}
