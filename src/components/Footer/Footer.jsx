import React from 'react'
import './Footer.css'
import { BsPinterest } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { TbBrandWordpress } from 'react-icons/tb'
import { FaBasketballBall } from 'react-icons/fa'
import { AiOutlineSkype } from 'react-icons/ai'
export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <p className="footer__copy-right">© 2019 createuiux. All rights reserved.</p>
                    <div className="footer__socials">
                        <a href="#" className="footer__social-link"></a>
                        <a href="#" className="footer__social-link"><BsFacebook /></a>
                        <a href="#" className="footer__social-link"><TbBrandWordpress /></a>
                        <a href="#" className="footer__social-link"><FaBasketballBall /></a>
                        <a href="#" className="footer__social-link"><BsPinterest /></a>
                        <a href="#" className="footer__social-link"><AiOutlineSkype /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
