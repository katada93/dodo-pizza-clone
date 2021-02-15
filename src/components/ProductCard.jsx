import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'
import './ProductCard.scss'

const ProductCard = ({ id, name, imageUrl, description, price, types, sizes, weights }) => {
  const sizeNames = ['Маленькая', 'Средняя', 'Большая']
  const typeNames = ['Традиционное', 'Тонкое']

  const [showModal, setShowModal] = useState(false)
  const [activeSize, setActiveSize] = useState(0)
  const [activeType, setActiveType] = useState(0)

  const handleActiveSize = (index) => setActiveSize(index)
  const handleActivetype = (index) => setActiveType(index)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const correctPrice = typeof (price) === 'number' ? `${price} ₽` : `от ${price[0]} ₽`

  return (
    <Col xl={3} lg={4} md={6} xs={12}>
      <div className="product-card">
        <div className="product-card__img">
          <img onClick={handleShow} src={imageUrl} alt={name} />
        </div>
        <div className="product-card__content">
          <div className="product-card__text">
            <h3 className="product-card__name">{name}</h3>
            <p className="product-card__desc">{description}</p>
          </div>
          <div className="product-card__footer">
            <span>{correctPrice}</span>
            <button onClick={handleShow}>Выбрать</button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <div className="product-modal">
          <div onClick={handleClose} className="product-modal__close">
            <b>&#10006;</b>
          </div>
          <div className="product-modal__img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="product-modal__data">
            <h3>{name}</h3>
            <h5>{sizes && sizes[activeSize]} см, {types && types[activeType]} тесто, {weights && weights[activeSize]} г</h5>
            <p>{description}</p>
            <div className="product-modal__radio">
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
            <button className="modal__button">Добавить в корзину за {price[activeSize]} ₽</button>
          </div>
        </div>
      </Modal>
    </Col>
  )
}

export default ProductCard
