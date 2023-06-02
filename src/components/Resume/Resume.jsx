import React, { useState } from 'react'
import './Resume.css'
import Title from '../Dependencies/Titles/Title'
import data from './../../data/Data'

export default function Resume() {

    const [datas, setDatas] = useState(data)
    const [itemIndex, setItemIndex] = useState(0)
    const [selectedItem, setSelectedItem] = useState(data[0])


    const handleItemClick = (index, Data) => {
        setItemIndex(index);
        setSelectedItem(Data)
    };



    return (
        <section className='resume'>
            <div className="container skew-reset">
                <Title>
                    {[
                        'Resume',
                        'My formal Bio Details'
                    ]}
                </Title>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <ul className="resume-list h-full">

                            {datas.map((data, index) => (
                                <li key={data.id} className={`resume-list-item ${itemIndex === index ? 'resume-list-item--active' : ''}`} onClick={() => handleItemClick(index, data)}>
                                    {data.svg}
                                    <span className="resume-list__text">{data.title}</span>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="resume-content resume-content--show" id='education' >



                            <div className="resume-content__item" key={selectedItem.id} >
                                <div className="resume-content__head">
                                    <h5 className="resume-content__title">{selectedItem.secondTitle}</h5>
                                    <span className="resume-content__date">2010-2014</span>
                                </div>
                                <h6 className="resume-content__subtitle">{selectedItem.subTitile}</h6>
                                <p className="resume-content__description">{selectedItem.des}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
