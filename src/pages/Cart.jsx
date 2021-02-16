import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Cart.scss'

const Cart = (props) => {
  const cartItems = useSelector(({cart}) => cart.items)

  return (
    <div className="cart-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={12}>
            <h1>Корзина</h1>
            <ul className="cart-page__items">
              <li className="cart-page__item">
                <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/d13580ce1bbc42e997ba4296ed7b69a1_146x146.jpeg" alt="Cart item" />
                <div className="cart-page__item-descr">
                  <h3>Цыпленок блю чиз</h3>
                  <p>Средняя 30 см, традиционное тесто</p>
                </div>
                <div className="cart-page__item-buttons">
                  <button className="cart-page__minus-btn">-</button>
                  <span className="cart-page__count">1</span>
                  <button className="cart-page__plus-btn">+</button>
                </div>
                <span className="cart-page__item-price">595 ₽</span>
                <div className="cart-page__item-trash">
                  <svg width="20" height="20" fill="none"><path d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z" fill="#373536"></path><path d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z" fill="#373535"></path></svg>
                </div>
              </li>
              <li className="cart-page__item">
                <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/d13580ce1bbc42e997ba4296ed7b69a1_146x146.jpeg" alt="Cart item" />
                <div className="cart-page__item-descr">
                  <h3>Цыпленок блю чиз</h3>
                  <p>Средняя 30 см, традиционное тесто</p>
                </div>
                <div className="cart-page__item-buttons">
                  <button className="cart-page__minus-btn">-</button>
                  <span className="cart-page__count">1</span>
                  <button className="cart-page__plus-btn">+</button>
                </div>
                <span className="cart-page__item-price">595 ₽</span>
                <div className="cart-page__item-trash">
                  <svg width="20" height="20" fill="none"><path d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z" fill="#373536"></path><path d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z" fill="#373535"></path></svg>
                </div>
              </li>
              <li className="cart-page__item">
                <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/d13580ce1bbc42e997ba4296ed7b69a1_146x146.jpeg" alt="Cart item" />
                <div className="cart-page__item-descr">
                  <h3>Цыпленок блю чиз</h3>
                  <p>Средняя 30 см, традиционное тесто</p>
                </div>
                <div className="cart-page__item-buttons">
                  <button className="cart-page__minus-btn">-</button>
                  <span className="cart-page__count">1</span>
                  <button className="cart-page__plus-btn">+</button>
                </div>
                <span className="cart-page__item-price">595 ₽</span>
                <div className="cart-page__item-trash">
                  <svg width="20" height="20" fill="none"><path d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z" fill="#373536"></path><path d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z" fill="#373535"></path></svg>
                </div>
              </li>
            </ul>
            <div className="cart-page__footer">
              <Link to="/">
                <button type="button" className="btn-back">
                  <svg width="24" height="24" fill="none"><path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  Вернуться в меню
                </button>
              </Link>
              <button type="button" className="btn-buy">
                Оформить заказ
                  <svg width="24" height="24" fill="none"><path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart
