import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import './Products.scss'

const Products = ({ sectionId, title, fetch }) => {
  const [goods, setGoods] = useState([])

  useEffect(() => {
    axios
      .get('/db.json')
      .then(({ data }) => {
        setGoods(data[fetch])
      })
  }, [])

  return (
    <div className="product">
      <Container>
        <h1 className="product__title">{title}</h1>
        <Row id={sectionId}>
          {goods && goods.map(good => {
            return <ProductCard
              key={good.id}
              {...good}
            />
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Products
