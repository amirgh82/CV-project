import React from 'react'
import './Footer.css'
import { BiLogoFacebookCircle, BiLogoPinterest } from 'react-icons/bi'
import { TbBrandWordpress } from 'react-icons/tb'
import { FaVolleyball } from 'react-icons/fa'
import { AiOutlineSkype } from 'react-icons/ai'
export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <p className="footer__copy-right">© 2019 createuiux. All rights reserved.</p>
                    <div className="footer__socials">
                        <a href="#" className="footer__social-link"></a>
                        <a href="#" className="footer__social-link"><BiLogoFacebookCircle /></a>
                        <a href="#" className="footer__social-link"><TbBrandWordpress /></a>
                        <a href="#" className="footer__social-link"><FaVolleyball /></a>
                        <a href="#" className="footer__social-link"><BiLogoPinterest /></a>
                        <a href="#" className="footer__social-link"><AiOutlineSkype /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
