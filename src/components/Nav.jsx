import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
import './Nav.scss'
import navLogo from '../assets/img/logo-nav.png'
import emptyCart from '../assets/img/empty-cart.png'

const Nav = () => {
  const [showNav, setShowNav] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleClosePopup = () => setShowPopup(false);
  const handleShowPopup = () => setShowPopup(true);

  const scrollToTop = () => {
    scroll.scrollToTop();
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
    return () => document.removeEventListener('scroll', handleShowLogo)
  }, [])

  return (
    <nav className={`nav ${showNav && 'nav--fixed'}`}>
      <Container>
        <Row className="align-items-center">
          <Col lg="8">
            <ul className="nav__list">
              {showNav
                ? <img onClick={scrollToTop} className="nav-logo" width="30" src={navLogo} alt="Nav Logo" />
                : null}
              <li className="nav__item">
                <Link
                  to="pizzas"
                  smooth={true}
                  activeClass="active"
                  offset={-170}
                  duration={500}
                  href="#"
                  className="nav__link">
                  Пицца
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="snacks"
                  smooth={true}
                  activeClass="active"
                  offset={-150}
                  duration={500}
                  href="#"
                  className="nav__link">
                  Закуски
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="desserts"
                  smooth={true}
                  activeClass="active"
                  offset={-150}
                  duration={500}
                  href="#"
                  className="nav__link">
                  Десерты
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="drinks"
                  smooth={true}
                  activeClass="active"
                  duration={500}
                  href="#"
                  className="nav__link">
                  Напитки
                </Link>
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
          <Col xl="2" lg={{ offset: 2 }}>
            <div className="nav__cart">
              <button onMouseOver={handleShowPopup} onMouseLeave={handleClosePopup} className="cart-button">
                <span className="cart-button__text">Корзина</span>
                <span className="cart-button__count">
                  <span className="cart-button__number">7</span>
                  <svg className="cart-button__arrow" width="13" height="11" fill="none"><path d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
              </button>
              {showPopup &&
                <div className="nav__cart-popup">
                  <div className="empty-cart">
                    <img width="200" src={emptyCart} alt="Empty" />
                    <p className="empty-cart__oops">Ой, пусто!</p>
                    <p>Мы всегда доставляем бесплатно, но сумма заказа должна быть от 445 ₽</p>
                  </div>
                </div>}
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Nav
