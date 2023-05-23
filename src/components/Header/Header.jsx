import React, { useState } from 'react'
import './Header.css'

export default function Header() {
    const [isChangeBurger, setisChangeBurger] = useState(false)


    const changeToggle = () => {
        setisChangeBurger((prev) => !prev)
    }


    return (
        <>
            <header className='header'>
                <div className="container">
                    <nav className='nav'>
                        <h1 className="nav__logo">
                            WA.
                        </h1>

                        <ul className={`menu ${isChangeBurger ? 'menu--open' : ''} `}>
                            <li className="menu__item">
                                <a href="#" className="menu__link menu__link-active">
                                    Home
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    About us
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Resume
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Services
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Portfolio
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">
                                    Pricing
                                </a>
                            </li>
                        </ul>

                        <div className={`nav__toggle-icon ${isChangeBurger ? 'nav__toggle-icon--open' : ''} `} onClick={changeToggle}>
                            <div className="nav__toggle-line"></div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className={`cover ${isChangeBurger ? 'cover-show' : ''}`}></div>
        </>
    )
}

