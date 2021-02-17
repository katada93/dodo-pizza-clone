import React from 'react'

const CartItem = ({ id, name, imageUrl, type, size, price, count, sizeNumber, totalPrice, plusItem, minusItem }) => {
  const handlePlus = () => plusItem({ id, price, type, size })
  const handleMinus = () => minusItem({ id, price, type, size })

  return (
    <li className="cart-page__item">
      <img src={imageUrl} alt="Cart item" />
      <div className="cart-page__item-descr">
        <h3>{name}</h3>
        {type && <p>{size} {sizeNumber} см, {type.toLowerCase()} тесто</p>}
      </div>
      <div className="cart-page__item-buttons">
        <button onClick={handleMinus} className="cart-page__minus-btn">-</button>
        <span className="cart-page__count">{count}</span>
        <button onClick={handlePlus} className="cart-page__plus-btn">+</button>
      </div>
      <span className="cart-page__item-price">{totalPrice} ₽</span>
      <div className="cart-page__item-trash">
        <svg width="20" height="20" fill="none"><path d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z" fill="#373536"></path><path d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z" fill="#373535"></path></svg>
      </div>
    </li>
  )
}

export default CartItem
