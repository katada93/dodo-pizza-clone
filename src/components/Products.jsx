import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import './Products.scss'

const Products = ({ sectionId, title, items }) => {

  return (
    <div className="product">
      <Container fluid="md">
        <h1 className="product__title">{title}</h1>
        <Row id={sectionId}>
          {items && items.map(item => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Products
