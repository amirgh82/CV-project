import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Title from '../Dependencies/Titles/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";




export default function Portfolio() {


    const [slidesPerView, setSlidesPerView] = useState(2);
    const [spaceBetween, setSpaceBetween] = useState(30)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 998) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



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
                    <li className="portfolio-list__item portfolio-list__item--active">All Work</li>
                    <li className="portfolio-list__item">Illustration</li>
                    <li className="portfolio-list__item">Animation</li>
                    <li className="portfolio-list__item">App Ui</li>
                    <li className="portfolio-list__item">Web Ui</li>
                    <li className="portfolio-list__item">Social Media</li>
                    <li className="portfolio-list__item">Print Design</li>
                </ul>

                <div className="portfolio-content">
                    <Swiper
                        slidesPerView={slidesPerView}
                        modules={[Pagination]}
                        spaceBetween={spaceBetween}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-2.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-2.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-2.jpg" alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className='portfolio-content__img' src="/images/portfolio-3.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}
