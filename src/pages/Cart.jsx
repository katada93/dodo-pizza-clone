import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import CartItem from '../components/CartItem'
import { clearCart, minusCartItem, plusCartItem, removeCartItem } from '../redux/actions/cart'

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

  const onClearCart = () => {
    if (window.confirm('Вы точно хотите очистить всю корзину?')) {
      dispatch(clearCart())
    }
  }

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <h1>Корзина</h1>
        <button onClick={onClearCart}>Очистить корзину</button>
      </div>
      {totalPrice === 0
        ? <h3 className="empty-cart-text">Добавьте что-нибудь из меню</h3>
        : <ul className="cart-page__items">
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
        </ul>}
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
          <svg width="24" height="24" fill="none"><path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Cart
