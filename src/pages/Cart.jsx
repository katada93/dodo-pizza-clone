import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import CartItem from '../components/CartItem'
import { minusCartItem, plusCartItem, removeCartItem } from '../redux/actions/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(({ cart }) => cart)

  const addedItems = Object.keys(items).map(item => items[item]).flat()

  const onPlusItem = (item) => {
    dispatch(plusCartItem(item))
  }

  const onMinusItem = (item) => {
    dispatch(minusCartItem(item))
  }

  const onRemoveItem = (item) => {
    dispatch(removeCartItem(item))
  }

  return (
    <div className="cart-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={12}>
            <h1>Корзина</h1>
            <ul className="cart-page__items">
              {addedItems.map((item, ind) => (
                <CartItem
                  key={ind} {...item.item}
                  count={item.count}
                  totalPrice={item.price}
                  plusItem={onPlusItem}
                  minusItem={onMinusItem}
                  removeItem={onRemoveItem} />
              ))}
              <div className="cart-page-sum">Сумма заказа:	<span>{totalPrice} ₽</span></div>
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
