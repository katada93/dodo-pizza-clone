import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import './Products.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setGoods, setLoading } from '../redux/actions/goods'

const Products = ({ sectionId, title, fetch }) => {
  const dispatch = useDispatch()
  const goods = useSelector(({goods}) => goods.items[fetch])
  const loading = useSelector(({goods}) => goods.loading)

  useEffect(() => {
    axios
      .get('/db.json')
      .then(({ data }) => {
        dispatch(setGoods({ name: fetch, items: data[fetch] }))
      })
  }, [])

  return (
    <div className="product">
      <Container fluid="md">
        <h1 className="product__title">{title}</h1>
        <Row id={sectionId}>
          {loading ? '...loading' : null}
          {goods && goods.map(good => (
            <ProductCard
              key={good.id}
              {...good}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Products
