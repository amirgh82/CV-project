import React from 'react'
import './Resume.css'
import Title from '../Dependencies/Titles/Title'
export default function Resume() {
    return (
        <section className='resume'>
            <div className="container">
                <Title>
                    {[
                        'Resume',
                        'My formal Bio Details'
                    ]}
                </Title>
                <div className="row">
                    <div className="col-3">
                        <ul className="resume-list">
                            <li className="resume-list-item resume-list-item--active">
                                <svg className='resume-list__icon' xmlns="http://www.w3.org/2000/svg" width="22" height="21.999" viewBox="0 0 22 21.999">
                                    <path id="Icon_awesome-user-graduate" data-name="Icon awesome-user-graduate" d="M463.357,3794a2.225,2.225,0,0,1-2.357-2.062v-.412c0-3.1,2.8-5.615,6.315-5.748l4.685,4.1,4.686-4.1c3.511.133,6.315,2.646,6.315,5.748v.412a2.225,2.225,0,0,1-2.358,2.062Zm2.358-15.124a4.918,4.918,0,0,1,.687-2.449l-3.241-.683V3778a.935.935,0,0,1,.045,1.718l.766,2.677a.45.45,0,0,1-.373.6h-2.053a.451.451,0,0,1-.373-.6l.766-2.677a.934.934,0,0,1,.044-1.718v-2.51l-.314-.064c-.888-.189-.888-1.169,0-1.358l9.36-1.973a4.839,4.839,0,0,1,1.95,0l9.349,1.977c.894.189.894,1.165,0,1.354l-4.728,1a4.87,4.87,0,0,1,.687,2.449c0,3.038-2.814,5.5-6.286,5.5S465.714,3781.912,465.714,3778.875Z" transform="translate(-461 -3772)" fill="#fff" />
                                </svg>
                                <span className='resume-list__text'>
                                    Education
                                </span>
                            </li>
                            <li className="resume-list-item">
                                <svg className='resume-list__icon' xmlns="http://www.w3.org/2000/svg" width="22" height="21.999" viewBox="0 0 22 21.999">
                                    <path id="history_icon" data-name="history icon" d="M472.008,3859H472a11.03,11.03,0,0,1-6.9-2.435,1.064,1.064,0,0,1-.081-1.58l.5-.5a1.067,1.067,0,0,1,.76-.316,1.042,1.042,0,0,1,.655.228A8.079,8.079,0,0,0,472,3856.16a8.161,8.161,0,1,0-5.592-14.108l2.251,2.252a.71.71,0,0,1-.5,1.211h-6.448a.71.71,0,0,1-.709-.71v-6.448a.708.708,0,0,1,1.211-.5l2.191,2.19A10.995,10.995,0,1,1,472.008,3859Zm2.126-7.115a1.06,1.06,0,0,1-.653-.224l-2.9-2.257v-6.017a1.065,1.065,0,0,1,1.064-1.064h.71a1.065,1.065,0,0,1,1.064,1.064v4.628l1.805,1.4a1.067,1.067,0,0,1,.187,1.495l-.436.56A1.06,1.06,0,0,1,474.134,3851.884Z" transform="translate(-461 -3837)" fill="#fff" />
                                </svg>

                                <span className='resume-list__text'>Work History</span>
                            </li>
                            <li className="resume-list-item">
                                <svg className='resume-list__icon' xmlns="http://www.w3.org/2000/svg" width="24.126" height="19.301" viewBox="0 0 24.126 19.301">
                                    <path id="Icon_awesome-laptop-code" data-name="Icon awesome-laptop-code" d="M480.713,3922.65h-19.3a2.416,2.416,0,0,1-2.413-2.413v-.6a.6.6,0,0,1,.6-.6h9.018a1.2,1.2,0,0,0,.366.824,1.22,1.22,0,0,0,.869.382h2.292a1.185,1.185,0,0,0,1.234-1.206h9.14a.6.6,0,0,1,.6.6v.6A2.416,2.416,0,0,1,480.713,3922.65Zm0-4.826h-19.3v-12.666a1.812,1.812,0,0,1,1.809-1.81H478.9a1.812,1.812,0,0,1,1.81,1.81v12.665Zm-16.893-12.065v9.65H478.3v-9.65Zm9.265,7.63a.6.6,0,0,1-.427-.177l-.426-.426a.606.606,0,0,1,0-.854l1.346-1.346-1.346-1.347a.6.6,0,0,1,0-.853l.426-.427a.6.6,0,0,1,.854,0l2.2,2.2a.606.606,0,0,1,0,.854l-2.2,2.2A.6.6,0,0,1,473.086,3913.389Zm-4.046,0a.6.6,0,0,1-.426-.177l-2.2-2.2a.6.6,0,0,1,0-.854l2.2-2.2a.6.6,0,0,1,.854,0l.426.426a.605.605,0,0,1,0,.854l-1.346,1.347,1.346,1.346a.6.6,0,0,1,0,.854l-.426.426A.6.6,0,0,1,469.04,3913.389Z" transform="translate(-458.999 -3903.348)" fill="#fff" />
                                </svg>

                                <span className='resume-list__text'>Programming Skill</span>
                            </li>
                            <li className="resume-list-item">
                                <svg className='resume-list__icon' xmlns="http://www.w3.org/2000/svg" width="23.303" height="18.448" viewBox="0 0 23.303 18.448">
                                    <path id="Icon_map-art-gallery" data-name="Icon map-art-gallery" d="M471.651,3986.223a4.2,4.2,0,0,1-4.293-4.3c0-1.747-1.066-2.459-3.68-2.459a3.386,3.386,0,0,1-2.76-1.23,4.874,4.874,0,0,1-.92-3.074,7.158,7.158,0,0,1,2.606-4.613,10.661,10.661,0,0,1,7.206-2.767c4.028,0,7.225.724,9.5,2.153a8.471,8.471,0,0,1,3.986,7.687,7.666,7.666,0,0,1-2.836,5.918C478.377,3985.292,475.329,3986.223,471.651,3986.223Zm0-6.148a1.844,1.844,0,1,0,1.839,1.845A1.829,1.829,0,0,0,471.651,3980.074Zm-7.665-6.149a1.535,1.535,0,1,0,1.084.451A1.525,1.525,0,0,0,463.986,3973.925Zm14.1-1.231a1.536,1.536,0,1,0,1.085.451A1.537,1.537,0,0,0,478.09,3972.694Zm-4.906-2.459a1.538,1.538,0,0,0-1.533,1.538,1.532,1.532,0,1,0,1.533-1.538Zm-4.905,0a1.537,1.537,0,1,0,1.533,1.538A1.525,1.525,0,0,0,468.279,3970.235Z" transform="translate(-460 -3967.775)" fill="#fff" />
                                </svg>

                                <span className='resume-list__text'>Designer Skills</span>
                            </li>
                            <li className="resume-list-item">
                                <svg className='resume-list__icon' xmlns="http://www.w3.org/2000/svg" width="18.888" height="14.167" viewBox="0 0 18.888 14.167">
                                    <path id="Icon_awesome-chart-bar" data-name="Icon awesome-chart-bar" d="M480.3,4048.128H463.18a1.182,1.182,0,0,1-1.181-1.181v-12.4a.591.591,0,0,1,.59-.59h1.181a.591.591,0,0,1,.59.59v11.215H480.3a.591.591,0,0,1,.59.59v1.18A.591.591,0,0,1,480.3,4048.128Zm-1.063-4.722h-1.416a.512.512,0,0,1-.472-.472v-8.5a.512.512,0,0,1,.472-.472h1.416a.512.512,0,0,1,.472.472v8.5A.512.512,0,0,1,479.235,4043.406Zm-3.542,0h-1.416a.512.512,0,0,1-.472-.472v-4.958a.5.5,0,0,1,.472-.471h1.416a.5.5,0,0,1,.472.471v4.958A.512.512,0,0,1,475.694,4043.406Zm-3.542,0h-1.416a.512.512,0,0,1-.472-.472v-7.319a.5.5,0,0,1,.472-.472h1.416a.5.5,0,0,1,.472.472v7.319A.512.512,0,0,1,472.152,4043.406Zm-3.542,0h-1.416a.512.512,0,0,1-.472-.472v-2.6a.512.512,0,0,1,.472-.472h1.416a.5.5,0,0,1,.472.472v2.6A.512.512,0,0,1,468.61,4043.406Z" transform="translate(-462 -4033.962)" fill="#fff" />
                                </svg>

                                <span className='resume-list__text'>SEO Skills</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <div className="resume-content resume-content--show" id='education' >
                            <div className="resume-content__item">
                                <div className="resume-content__head">
                                    <h5 className="resume-content__title">Envato University</h5>
                                    <span className="resume-content__date">2010-2014</span>
                                </div>
                                <h6 className="resume-content__subtitle">B.sc in complater Engineer</h6>
                                <p className="resume-content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloremque quisquam ipsam est! Nobis consectetur delectus sunt unde, debitis ipsa!</p>
                            </div>
                            <div className="resume-content__item">
                                <div className="resume-content__head">
                                    <h5 className="resume-content__title">Envato University</h5>
                                    <span className="resume-content__date">2010-2014</span>
                                </div>
                                <h6 className="resume-content__subtitle">B.sc in complater Engineer</h6>
                                <p className="resume-content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloremque quisquam ipsam est! Nobis consectetur delectus sunt unde, debitis ipsa!</p>
                            </div>
                            <div className="resume-content__item">
                                <div className="resume-content__head">
                                    <h5 className="resume-content__title">Envato University</h5>
                                    <span className="resume-content__date">2010-2014</span>
                                </div>
                                <h6 className="resume-content__subtitle">B.sc in complater Engineer</h6>
                                <p className="resume-content__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloremque quisquam ipsam est! Nobis consectetur delectus sunt unde, debitis ipsa!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
