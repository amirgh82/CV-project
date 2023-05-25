import React from 'react'
import './Home.css'
export default function Home() {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
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
                                    <a href="#" className="home__link">
                                        Hire Me
                                    </a>
                                    <a href="#" className="home__link">
                                        Get Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="home__photo"></div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2165.237" height="361.824" viewBox="0 0 2165.237 361.824">
                    <path id="Shape" d="M-27.061,842.561s136.212,230.682,399.849,188.94,252.483-137.226,544.85-30.757,358.107,28.729,547.046-37.349,358.107,118.637,576.45,8.788,0,232.2,0,232.2L36.82,1201.005Z" transform="translate(27.061 -842.561)" fill="#0cbfae" />
                </svg>

            </section>
        </>
    )
}
