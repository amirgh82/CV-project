import React from 'react'
import './About.css'
import Title from '../Dependencies/Titles/Title'
import Button from '../Dependencies/Button/Button'
export default function About() {
    return (
        <section className='aboutus'>
            <div className="container">
                <Title >
                    {[
                        "About Us",
                        "Why Choose me ?"
                    ]}
                </Title>
                <div className="about">
                    <div className="about__cover">
                        <img src='/images/about-us-man.jpg' className="about__img" />
                    </div>
                    <div className="about__content">
                        <h4 className="about__titile">
                            Why Choose me ?
                        </h4>
                        <p className="about__description">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        </p>

                        <h5 className="about__list-title">
                            Here is Few Features:
                        </h5>

                        <ul className="about-list">
                            <li className="about-list__item">User Interface Design</li>
                            <li className="about-list__item">User Experience Design</li>
                            <li className="about-list__item">Visual Commination Design</li>
                            <li className="about-list__item">Interaction Design</li>
                            <li className="about-list__item">Supper Support</li>
                        </ul>
                        <Button>Hire me</Button>
                        <Button >Get Resume</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
