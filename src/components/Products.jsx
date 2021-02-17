import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Loader from './Loader'
import ProductCard from './ProductCard'
import './Products.scss'

const Products = ({ sectionId, title, items, loading }) => {

  return (
    <div className="product">
      <Container fluid="md">
        <h1 className="product__title">{title}</h1>
        <Row id={sectionId}>
          {loading
            ? Array(8).fill().map((_, i) => <Col key={i} xl={3} lg={4} md={6} xs={12}><Loader key={i} /></Col>)
            : items.map(item => (
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
