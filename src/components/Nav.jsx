import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Nav.scss'
import navLogo from '../assets/img/logo-nav.png'
import NavCartPopup from './NavCartPopup';

const Nav = () => {
  const totalCount = useSelector(({ cart }) => cart.totalCount)
  const refPopup = useRef(null)
  const [showNav, setShowNav] = useState(false)
  const [showPopup, setShowPopup] = useState(true)

  const handleClosePopup = () => setShowPopup(false)
  const handleShowPopup = () => setShowPopup(true)

  const scrollToTop = () => {
    scroll.scrollToTop()
  };

  const handleShowLogo = () => {
    if (window.scrollY > 70) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleShowLogo)
    return () => {
      document.removeEventListener('scroll', handleShowLogo)
    }
  }, [])

  return (
    <nav className={`nav ${showNav && 'nav--fixed'}`}>
      <Container fluid="md">
        <Row className="align-items-center justify-content-between">
          <Col lg="8">
            <ul className="nav__list">
              {showNav
                ? <img onClick={scrollToTop} className="nav-logo" width="30" src={navLogo} alt="Nav Logo" />
                : null}
              <li className="nav__item">
                <ScrollLink
                  to="pizzas"
                  smooth={true}
                  offset={-170}
                  duration={500}
                  href="#"
                  className="nav__link">
                  Пицца
                </ScrollLink>
              </li>
              <li className="nav__item">
                <ScrollLink
                  to="snacks"
                  smooth={true}
                  offset={-150}
                  duration={500}
                  href="#"
                  className="nav__link">
                  Закуски
                </ScrollLink>
              </li>
              <li className="nav__item">
                <ScrollLink
                  to="desserts"
                  smooth={true}
                  offset={-150}
                  duration={500}
                  href="#"
                  className="nav__link">
                  Десерты
                </ScrollLink>
              </li>
              <li className="nav__item">
                <ScrollLink
                  to="drinks"
                  smooth={true}
                  duration={500}
                  href="#"
                  className="nav__link">
                  Напитки
                </ScrollLink>
              </li>
              <li className="nav__item">
                <span className="nav__link">Комбо</span>
              </li>
              <li className="nav__item">
                <span className="nav__link">Другие товары</span>
              </li>
              <li className="nav__item">
                <span className="nav__link">Акции</span>
              </li>
              <li className="nav__item">
                <span className="nav__link">Контакты</span>
              </li>
              <li className="nav__item">
                <span className="nav__link">О нас</span>
              </li>
              <li className="nav__item live-stream">
                <span className="nav__link">Прямой эфир</span>
              </li>
            </ul>
          </Col>
          <Col lg="4" >
            <div className="nav__cart">
              <Link to="/cart">
                <button onMouseEnter={handleShowPopup} className="cart-button">
                  <span className="cart-button__text">Корзина</span>
                  <span className="cart-button__count">
                    <span className="cart-button__number">{totalCount}</span>
                    <svg className="cart-button__arrow" width="13" height="11" fill="none"><path d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </span>
                </button>
              </Link>
              {showPopup && <NavCartPopup onClose={handleClosePopup} />}
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Nav
