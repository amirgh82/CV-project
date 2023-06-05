import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Title from '../Dependencies/Titles/Title';
import { swiperData } from '../../data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";




export default function Portfolio() {

    const [swiperDatas, setSwiperDatas] = useState(swiperData)
    const [swiperSelected, setSwiperSelected] = useState(swiperData[0])
    const [listSelected, setListSelected] = useState(1)
    const [slidesPerView, setSlidesPerView] = useState(2);

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

    const selectListHandler = (id) => {
        setListSelected(id)
        let swiperData = swiperDatas
        let itemSelected = swiperData.find(dataSelected => dataSelected.id === id)
        setSwiperSelected(itemSelected)
    }



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
                    {swiperDatas.map(data => (
                        <li className={`portfolio-list__item ${listSelected === data.id ? 'portfolio-list__item--active' : ''}`}
                            onClick={() => selectListHandler(data.id)}>{data.title}</li>
                    ))}
                </ul>

                <div className="portfolio-content">
                    <Swiper
                        slidesPerView={slidesPerView}
                        modules={[Pagination]}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                    >
                        {swiperSelected.img.map(img => (
                            <SwiperSlide>
                                <img className='portfolio-content__img' src={img} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
