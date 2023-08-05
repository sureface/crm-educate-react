import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NabBar'
import PreLoader from './components/PreLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import headerImage from './assets/img/header-image.png'
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import PlayMarket from './assets/icons/google-play.svg'
import PlayMarketPhone from './assets/img/google-play-phones.png'
import whyWe from './assets/img/why-we.png'
import tgBot from './assets/img/tg-bot.png'
import Offers from './components/Offers';



const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <>
        {/* <a href='#' className="go-top">
            <FontAwesomeIcon icon={faChevronUp} style={{color: "#ffffff",}} />
        </a>
        <PreLoader /> */}
        <NavBar />
        {/* <header id="header" className="bg-blue">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="header-title animate__animated animate__fadeInLeftBig">
                            EduSmart CRM 一 O'quv markazlar va maktablarni aqlli boshqarish tizimi
                        </div>
                        <div className="header-text animate__animated animate__fadeInLeftBig">
                            O'quv markazingizni dunyoning ixtiyoriy nuqtasidan boshqaring!
                        </div>
                        <button type="btn" className="header-btn animate__animated animate__fadeInLeftBig">kirish</button>
                    </div>
                    <div className="col">
                        <img src={headerImage} alt="err" className="w-100 animate__animated animate__fadeInRightBig" />
                    </div>
                </div>
            </div>
        </header>

        <HeroSection />

        <section id="section" className="bg-blue">
            <div className="container-fluid">
                <div className="section-mobile">
                    <div className="section-left">
                        <div className="section-title" data-aos="fade-right" data-aos-duration="500">Siz uchun!</div>
                        <div className="section-description" data-aos="fade-right" data-aos-duration="700">Edu-Smart mobil ilovasi: endi o'quv markazingiz sizning smartfoningizda.</div>
                        <div className="section-icon" data-aos="fade-right" data-aos-duration="700">
                            <img src={PlayMarket} alt="err" />
                        </div>
                    </div>
                    <div className="section-right">
                        <div className="section-mobile_pic">
                            <img src={PlayMarketPhone} alt="err" data-aos="fade-left" data-aos-duration="700" />
                        </div>  
                    </div>
                </div>
            </div>
            <div className="why-we">
                <div className="why-we__title">
                    <div data-aos="fade-right" data-aos-duration="100">
                        Nega aynan biz ?
                    </div>
                </div>
                <div className="container">
                    <div className="why-we__wrapper">
                        <div className="why-we__left">
                            <div className="d-flex why-we__box"data-aos="fade-right" data-aos-duration="200">
                                <div className="why-we__count">01</div>
                                <div className="why-we__item">
                                    <div className="why-we__item-title">Ishonchli xavfsizlik siyosati</div>
                                    <div className="why-we__item-text">Lorem ipsum dolor sit amet consectetur</div>
                                </div>
                            </div>
                            <div className="d-flex why-we__box"data-aos="fade-right" data-aos-duration="300">
                                <div className="why-we__count">02</div>
                                <div className="why-we__item">
                                    <div className="why-we__item-title">Ishonchli xavfsizlik siyosati</div>
                                    <div className="why-we__item-text">Lorem ipsum dolor sit amet consectetur</div>
                                </div>
                            </div>
                            <div className="d-flex why-we__box"data-aos="fade-right" data-aos-duration="400">
                                <div className="why-we__count">03</div>
                                <div className="why-we__item">
                                    <div className="why-we__item-title">Ishonchli xavfsizlik siyosati</div>
                                    <div className="why-we__item-text">Lorem ipsum dolor sit amet consectetur</div>
                                </div>
                            </div>
                            <div className="d-flex why-we__box" data-aos="fade-right" data-aos-duration="500">
                                <div className="why-we__count">04</div>
                                <div className="why-we__item">
                                    <div className="why-we__item-title">Ishonchli xavfsizlik siyosati</div>
                                    <div className="why-we__item-text">Lorem ipsum dolor sit amet consectetur</div>
                                </div>
                            </div>
                        </div>
                        <div className="why-we__right">
                            <img src={whyWe} alt="err" data-aos="fade-left" data-aos-duration="500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="crmTg-bot">
                    <div className="col">
                        <div className="crmTg-bot__title" data-aos="fade-right" data-aos-duration="500">Telegram bot</div>
                        <div className="crmTg-bot__text" data-aos="fade-right" data-aos-duration="600">
                            Lorem ipsum dolor sit amet consectetur. Etiam risus magnis in sed quis at sapien ut. Sed vestibulum auctor eget vitae fermentum nulla sed.
                        </div>
                    </div>
                    <div className="col crmTg-bot__img">
                        <img src={tgBot} alt="err" data-aos="fade-left" data-aos-duration="500" />
                    </div>
                </div>
            </div>
            <Offers />
        </section>

        <Footer /> */}
    </>
  )
}

export default App