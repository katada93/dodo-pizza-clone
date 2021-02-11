import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import navLogo from '../assets/img/logo-nav.png'
import { Link, animateScroll as scroll } from "react-scroll";
import './Nav.scss'

const Nav = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleShowLogo = () => {
    if (window.scrollY > 70) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleShowLogo)
    return () => document.removeEventListener('scroll', handleShowLogo)
  }, [])

  return (
    <nav className={`nav ${show && 'nav--fixed'}`}>
      <Container>
        <Row className="align-items-center">
          <Col lg="8">
            <ul className="nav__list">
              {show
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
                <a href="#" className="nav__link">Комбо</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Другие товары</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Акции</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Контакты</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">О нас</a>
              </li>
              <li className="nav__item live-stream">
                <a href="#" className="nav__link">Прямой эфир</a>
              </li>
            </ul>
          </Col>
          <Col lg="2" lg={{ offset: 2 }}>
            <div className="nav__cart">
              <button className="cart-button cart-button-hover">
                <span className="cart-button__text">Корзина</span>
                <span className="cart-button__count">
                  <span className="cart-button__number">7</span>
                  <svg className="cart-button__arrow" width="13" height="11" fill="none"><path d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
              </button>
              <div className="nav__cart-modal">
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Nav
