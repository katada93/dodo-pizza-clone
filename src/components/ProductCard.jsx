import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'
import './ProductCard.scss'

const ProductCard = ({ id, name, imageUrl, description, price, types, sizes }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const correctPrice = typeof (price) === 'number' ? `${price} ₽` : `от ${price[0]} ₽`

  return (
    <Col lg={3} md={6} xs={12}>
      <div className="product-card">
        <div className="product-card__img">
          <img onClick={handleShow} src={imageUrl} alt={name} />
        </div>
        <div className="product-card__text">
          <h3 className="product-card__name">{name}</h3>
          <p className="product-card__desc">{description}</p>
        </div>
        <div className="product-card__footer">
          <span>{correctPrice}</span>
          <button onClick={handleShow}>Выбрать</button>
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
            <h5>30 см, традиционное тесто, 610 г</h5>
            <p>{description}</p>
            <div className="product-modal__radio">
              <ul>
                <li className="active">Маленькая</li>
                <li>Средняя</li>
                <li>Большая</li>
              </ul>
              <ul>
                <li className="active">Традиционное</li>
                <li>Тонкое</li>
              </ul>
            </div>
            <button className="modal__button">Добавить в корзину за 555 ₽</button>
          </div>
        </div>
      </Modal>
    </Col>
  )
}

export default ProductCard
