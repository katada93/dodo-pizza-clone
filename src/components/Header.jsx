import React, { useRef, useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import star from '../assets/img/star.svg'
import logo from '../assets/img/logo.svg'
import './Header.scss'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null)


  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const register = (e) => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(userCredential => {
        alert('Вы зарегистрировались!')
        handleClose()
        if (userCredential !== null) {
          auth.currentUser.sendEmailVerification()
        }
      }).catch(err => [
        alert(err.message)
      ])
  }

  const signIn = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then(user => {
        handleClose()
        unsubscribe()
      })
      .catch(err => alert(err.message))
  }

  const signOut = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      auth.signOut()
    }
  }

  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      setUser(user.email)
    } else {
      setUser(null)
    }
  })

  return (
    <header className="header">
      <Container fluid="md">
        <Row className="align-items-center justify-content-md-between">
          <Col xl="3" lg="3" md="4" sm="5" xs="5">
            <Link to="/">
              <div className="header__logo">
                <img src={logo} alt="Logo" />
              </div>
            </Link>
          </Col>
          <Col xl="6" lg="5" md="4" className="header__middle">
            <div className="header__contacts">
              <div className="header__contacts-about">
                <p className="header__contacts-city">Доставка пиццы <span>Грозный</span></p>
                <p className="header__contacts-time">46 мин - 4.46 <img width="12" src={star} alt="Star" /></p>
              </div>
              <div className="header__contacts-phone">
                <p className="header__contacts-numbers">
                  <a href="tel:88003020060">8 800 302-00-60</a>
                </p>
                <p className="header__contacts-text">Звонок бесплатный</p>
              </div>
            </div>
          </Col>
          <Col xl="3" lg="4" md="4" sm="7" xs="7">
            <div className="header__login">
              <button onClick={handleShow} className="header__login-button" type="button">{user || 'Войти'}</button>
              {!user ? null
                : <button onClick={signOut} className="header__login-button" type="button">Выйти</button>}
            </div>
            <Modal show={showModal} onHide={handleClose}>
              <div className="signin-modal">
                <div onClick={handleClose} className="signin-modal__close">
                  <b>&#10006;</b>
                </div>
                <form>
                  <h2>Вход на сайт</h2>
                  <input ref={emailRef} type="email" placeholder="Email" />
                  <input ref={passwordRef} type="password" placeholder="Password" />
                  <button onClick={signIn} type="submit">Войти</button>
                  <div>
                    <span>Первый раз на сайте? </span>
                    <span onClick={register} className="signin-modal__link">Регистрируйся сейчас!</span>
                  </div>
                </form>
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
