import React from 'react'
import './Pricing.css'
import Title from '../Dependencies/Titles/Title'
import { BsCheckLg } from 'react-icons/bs'
import Button from '../Dependencies/Button/Button'
export default function Pricing() {
    return (
        <section className='pricing'>
            <div className="container">
                <Title>
                    {
                        [
                            'Pricing',
                            'Check our Sevices package'
                        ]
                    }
                </Title>
                <div className="row">
                    <div className="col-4">
                        <div className="package">
                            <div className="package__head package__head--orange">
                                <h4 className="package__type">
                                    Basic
                                </h4>
                                <span className="package__price">
                                    $70
                                </span>
                                <span className="package__filter">
                                    Only PSD Design
                                </span>
                            </div>
                            <div className="package__body">
                                <ul className="package-options">
                                    <li className="package-options__item"><BsCheckLg />Graphic Desing</li>
                                    <li className="package-options__item"><BsCheckLg /> Web Design</li>
                                    <li className="package-options__item"><BsCheckLg /> UI/UX Design</li>
                                    <li className="package-options__item"><BsCheckLg /> HTML & CSS</li>
                                    <li className="package-options__item"><BsCheckLg /> SEO Optimize</li>
                                    <li className="package-options__item"><BsCheckLg /> Business Develop</li>
                                </ul>
                                <Button >
                                    Choose Plan
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="package">
                            <div className="package__head package__head--purple">
                                <h4 className="package__type">
                                    Standard
                                </h4>
                                <span className="package__price">
                                    $100
                                </span>
                                <span className="package__filter">
                                    Only PSD Design
                                </span>
                            </div>
                            <div className="package__body">
                                <ul className="package-options">
                                    <li className="package-options__item"><BsCheckLg />Graphic Desing</li>
                                    <li className="package-options__item"><BsCheckLg /> Web Design</li>
                                    <li className="package-options__item"><BsCheckLg /> UI/UX Design</li>
                                    <li className="package-options__item"><BsCheckLg /> HTML & CSS</li>
                                    <li className="package-options__item"><BsCheckLg /> SEO Optimize</li>
                                    <li className="package-options__item"><BsCheckLg /> Business Develop</li>
                                </ul>
                                <Button >
                                    Choose Plan
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="package">
                            <div className="package__head package__head--pink">
                                <h4 className="package__type">
                                    Premium
                                </h4>
                                <span className="package__price">
                                    $150
                                </span>
                                <span className="package__filter">
                                    Only PSD Design
                                </span>
                            </div>
                            <div className="package__body">
                                <ul className="package-options">
                                    <li className="package-options__item"><BsCheckLg />Graphic Desing</li>
                                    <li className="package-options__item"><BsCheckLg /> Web Design</li>
                                    <li className="package-options__item"><BsCheckLg /> UI/UX Design</li>
                                    <li className="package-options__item"><BsCheckLg /> HTML & CSS</li>
                                    <li className="package-options__item"><BsCheckLg /> SEO Optimize</li>
                                    <li className="package-options__item"><BsCheckLg /> Business Develop</li>
                                </ul>
                                <Button >
                                    Choose Plan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

