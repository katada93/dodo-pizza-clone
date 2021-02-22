import React, { useRef, useState } from 'react'
import { Container, Modal, Navbar } from 'react-bootstrap'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import star from '../assets/img/star.svg'
import logo from '../assets/img/logo.svg'
import './Header.scss'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

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
      .then(() => {
        unsubscribe()
        handleClose()
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
      <Navbar expand="md">
        <Container fliud="md">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Logo" />
          </Link>
          <Navbar.Toggle className="header__toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
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
            <div className="header__login ml-auto mr-md-0">
              <button onClick={handleShow} className="header__login-button" type="button">{user || 'Войти'}</button>
              {!user ? null
                : <button onClick={signOut} className="header__login-button" type="button">Выйти</button>}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleClose} animation={true}>
        <div className="signin-modal">
          <div onClick={handleClose} className="signin-modal__close">
            <b>&#10006;</b>
          </div>
          <form>
            <h2>{!isAuth ? 'Вход на сайт' : 'Регистрация'}</h2>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            {!isAuth
              ? <button onClick={signIn} type="submit">Войти</button>
              : <button onClick={register} type="submit">Зарегистрироваться</button>}

            <div>
              <span>{!isAuth ? 'Первый раз на сайте? ' : 'У вас есть аккаунт? '}</span>
              <span onClick={() => setIsAuth(!isAuth)} className="signin-modal__link">
                {!isAuth ? 'Регистрируйся сейчас!' : 'Войти'}
              </span>
            </div>
          </form>
        </div>
      </Modal>
    </header>
  )
}

export default Header
