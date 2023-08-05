import React, { useEffect, useState } from 'react'
import Logo from '../assets/icons/logo.svg'

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
            <ul className="navbar-nav ms-lg-auto mb-lg-0 ">
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
            </div>
        </div>
    </nav>
  )
}

export default NabBar