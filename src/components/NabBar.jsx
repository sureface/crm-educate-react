import React, { useEffect, useState } from 'react'
import Logo from '../assets/icons/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const NabBar = () => {

  const [scrolled, setScrolled] = useState(false)
 

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`${scrolled ? 'fixed-header' : ''} navbar navbar-expand-lg`}>
        <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="err" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">EDU Smart</h5>
                <button type="button" class="btn-close-drawer" data-bs-dismiss="offcanvas" aria-label="Close">
                  <FontAwesomeIcon icon={faX} size="xl" style={{color: "#ffffff",}} />
                </button>
              </div>
              <div className='offcanvas-body'>
                <ul className="navbar-nav ms-lg-auto mb-lg-0 mb-3">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">teachers</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">studients</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">documents</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">contact</a>
                    </li>
                </ul>
                <div className='nav-socialMedia'>

                  <a href="#" className="footer-socialMedia__links me-3">
                      <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color: "#ffffff",}} />
                  </a>
                  <a href="#" className="footer-socialMedia__links me-3">
                      <FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#ffffff",}} />
                  </a>
                  <a href="#" className="footer-socialMedia__links me-3">
                      <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{color: "#ffffff",}} />
                  </a>
                  <a href="#" className="footer-socialMedia__links me-5">
                      <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffffff",}} />
                  </a>

                  <a href='tel:+998997971545' className='nav-contact'>+998 (99) 7971545</a>
                </div>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default NabBar