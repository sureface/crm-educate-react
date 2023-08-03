import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPhone,
    faEnvelope,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/icons/logo-white.svg'

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-5 d-flex flex-column align-items-center">
                    <a href="#" className="footer-logo">
                        <img src={Logo} alt="err" />
                    </a>
                    <div className="footer-heading">
                        O’quv markazlar va maktablarni aqilli boshqarish tizimi
                    </div>
                    <div className="footer-brandName">Edusmart2022 </div>
                </div>
                <div className="col-5">
                    <div className="d-flex gap-5">
                        <ul className="col m-0 p-0">
                            <li className="footer-usefulLinks__title">Kompaniya</li>
    
                            <li className="footer-usefulLinks__item">
                                <a href="#" className="footer-usefulLinks__link">Biz haqimizda</a>
                            </li>
                            <li className="footer-usefulLinks__item">
                                <a href="#" className="footer-usefulLinks__link">Yangiliklar</a>
                            </li>
                            <li className="footer-usefulLinks__item">
                                <a href="#" className="footer-usefulLinks__link">Shartnoma</a>
                            </li>
                            <li className="footer-usefulLinks__item">
                                <a href="#" className="footer-usefulLinks__link">Mutaxassislar yordami</a>
                            </li>
                        </ul>
                        <ul className="col m-0 p-0">
                            <li className="footer-usefulLinks__title">Murojaat uchun</li>
    
                            <li className="d-flex align-items-center footer-usefulLinks__item">
                                <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "#ffffff",}} />
                                <a href="tel:+998997971545" className="footer-usefulLinks__link ms-3">(406) 555-0120</a>
                            </li>
                            <li className="d-flex align-items-center footer-usefulLinks__item">
                                <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color: "#ffffff",}} />
                                <a href="mailto:mangcoding123@gmail.com" className="footer-usefulLinks__link ms-3">mangcoding123@gmail.com</a>
                            </li>
                            <li className="d-flex align-items-center footer-usefulLinks__item">
                                <FontAwesomeIcon icon={faLocationDot} size="xl" style={{color: "#ffffff",}} />
                                <a href="#" className="footer-usefulLinks__link ms-3 text-break">"Turon Information Technology Group" Toshkent shahar Yunusobod tumani15 - mavze 42A-uy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-2">
                    <div className="footer-socialMedia text-center">Ijtimoiy tarmoqlar</div>
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="#" className="footer-socialMedia__links me-3">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#ffffff",}} />
                        </a>
                        <a href="#" className="footer-socialMedia__links me-3">
                            <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#ffffff",}} />
                        </a>
                        <a href="#" className="footer-socialMedia__links me-3">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{color: "#ffffff",}} />
                        </a>
                        <a href="#" className="footer-socialMedia__links">
                            <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffffff",}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer