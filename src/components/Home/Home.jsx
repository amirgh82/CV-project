import React from 'react'
import './Home.css'
import Button from '../Dependencies/Button/Button'
export default function Home() {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7">
                            <div className="home-content">
                                <h3 className="home__name">
                                    Hello, IM <span>White Alexa</span>
                                </h3>
                                <h2 className="home__title">
                                    Creative Designer
                                </h2>
                                <p className="home__caption">
                                    Freelancer Web/ Mobile UI/UX Designer with Motion Graphics
                                </p>

                                <div className="home__links-wrapper">
                                    <Button>Hire me</Button>
                                    <Button >Get Resume</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="home__photo"></div>
                        </div>
                    </div>
                </div>
                

            </section>
        </>
    )
}
