import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import emptyCart from '../assets/img/empty-cart.png'
import { minusCartItem, plusCartItem, removeCartItem } from '../redux/actions/cart'
import CartItem from './CartItem'
import './NavCartPopup.scss'

const NavCartPopup = ({ onClose }) => {
  const dispatch = useDispatch()
  const { items: cartItems, totalPrice, totalCount } = useSelector(({ cart }) => cart)

  const items = Object.keys(cartItems).map(item => cartItems[item]).flat()

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
    <div onMouseLeave={onClose} className={`nav__cart-popup ${!totalCount && 'nav__cart-popup--empty'}`}>
      {!totalCount
        ? <div className="empty-cart">
          <img width="200" src={emptyCart} alt="Empty" />
          <p className="empty-cart__oops">Ой, пусто!</p>
          <p>Мы всегда доставляем бесплатно, но сумма заказа должна быть от 445 ₽</p>
        </div>
        :
        <ul className="cart-popup-items">
          {items.map((item, ind) => (
            <CartItem
              className="cart-popup-item"
              key={ind} {...item.item}
              count={item.count}
              totalPrice={item.price}
              plusItem={onPlusItem}
              minusItem={onMinusItem}
              removeItem={onRemoveItem} />
          ))}
          <div className="cart-page-sum">Сумма заказа:	<span>{totalPrice} ₽</span></div>
        </ul>}

    </div>
  )
}

export default NavCartPopup
