import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cart'
import './ProductCard.scss'

const ProductCard = ({ id, name, imageUrl, description, price, types, sizes, weights }) => {
  const dispatch = useDispatch()
  const sizeNames = ['Маленькая', 'Средняя', 'Большая']
  const typeNames = ['Традиционное', 'Тонкое']

  const [showModal, setShowModal] = useState(false)
  const [activeSize, setActiveSize] = useState(0)
  const [activeType, setActiveType] = useState(0)

  const handleActiveSize = (index) => setActiveSize(index)
  const handleActivetype = (index) => setActiveType(index)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const isPizza = typeof (price) !== 'number'

  const addItemToCart = () => {
    const obj = {id, name, description, price}
    dispatch(addToCart(obj))
    handleCloseModal()
  }

  return (
    <Col xl={3} lg={4} md={6} xs={12}>
      <div className="product-card">
        <div className="product-card__img">
          <img onClick={handleShowModal} src={imageUrl} alt={name} />
        </div>
        <div className="product-card__content">
          <div className="product-card__text">
            <h3 className="product-card__name">{name}</h3>
            <p className="product-card__desc">{description}</p>
          </div>
          <div className="product-card__footer">
            {isPizza
              ? <><span>{!isPizza ? `${price} ₽` : `от ${price[0]} ₽`}</span>
                <button onClick={handleShowModal}>Выбрать</button></>
              : <><span>{price} ₽</span>
                <button onClick={addItemToCart}>В корзину</button></>}
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <div className="product-modal">
          <div onClick={handleCloseModal} className="product-modal__close">
            <b>&#10006;</b>
          </div>
          <div className="product-modal__img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="product-modal__data">
            <h3>{name}</h3>
            {isPizza
              ? <h5>{sizes && sizes[activeSize]} см, {types && types[activeType]} тесто, {weights && weights[activeSize]} г</h5>
              : null}
            <p>{description}</p>
            {isPizza
              ? <div className="product-modal__radio">
                <ul>
                  {sizeNames.map((name, ind) => (
                    <li
                      key={name}
                      className={ind === activeSize ? 'active' : ''}
                      onClick={() => handleActiveSize(ind)}>
                      {name}
                    </li>
                  ))}
                </ul>
                <ul>
                  {typeNames.map((type, ind) => (
                    <li
                      key={type}
                      className={ind === activeType ? 'active' : ''}
                      onClick={() => handleActivetype(ind)}>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
              : null}
            <button  onClick={addItemToCart} className="modal__button">Добавить в корзину за {isPizza ? price[activeSize] : price} ₽</button>
          </div>
        </div>
      </Modal>
    </Col>
  )
}

export default ProductCard
