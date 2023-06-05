import React from 'react'
import './Contact.css'
import Title from '../Dependencies/Titles/Title'
export default function Contact() {
    return (
        <section className='contactus'>
            <Title>
                {
                    [
                        'Contact us',
                        `Let's Keep In Touch`
                    ]
                }
            </Title>
            <div className="contactus__wrapper">
                <div className="container h-full">
                    <div className="contactus__map">
                        <svg className='contactus__icon' xmlns="http://www.w3.org/2000/svg" width="26" height="35.999" viewBox="0 0 26 35.999">
                            <path id="map_pin" data-name="map pin" d="M634,7348a13.034,13.034,0,0,0-13,13.038c0,8.921,11.634,22.019,12.129,22.572a1.168,1.168,0,0,0,1.742,0c.5-.553,12.129-13.65,12.129-22.572A13.034,13.034,0,0,0,634,7348Zm0,19.6a6.559,6.559,0,1,1,6.541-6.559A6.557,6.557,0,0,1,634,7367.6Z" transform="translate(-621 -7348)" fill="#0abead" />
                        </svg>
                    </div>
                    <div className="contact">
                        <h4 className="contact__title">
                            Get in Touch
                        </h4>
                        <form action="#" className='contact__form'>
                            <input type="text" className="contact__input" placeholder='Your Name' />
                            <input type="text" className="contact__input" placeholder='Your Email Address' />
                            <input type="text" className="contact__input" placeholder='Subject' />
                            <input type="text" className="contact__input" placeholder='Estimated Budget' />
                            <textarea className='contact__input contact__input--textarea' name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                            <button type='submit' className='contact__Submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
