import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Nav from '../components/Nav'
import Products from '../components/Products'
import cartButton from '../assets/img/cart-button.svg'
import { setGoods, setLoading } from '../redux/actions/goods'
import axios from 'axios'
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const totalCount = useSelector(({ cart }) => cart.totalCount)
  const { items, loading } = useSelector(({ goods }) => goods)

  useEffect(() => {
    dispatch(setLoading(true))
    axios
      .get('/db.json')
      .then(({ data }) => {
        dispatch(setGoods(data))
      })
  }, [dispatch])

  return (
    <div className="home-page">
      <Nav />
      <Slider />
      <Products sectionId="pizzas" title="Пицца" items={items.pizzas} loading={loading} />
      <Products sectionId="snacks" title="Закуски" items={items.snacks} loading={loading} />
      <Products sectionId="desserts" title="Десерты" items={items.desserts} loading={loading} />
      <Products sectionId="drinks" title="Напитки" items={items.drinks} loading={loading} />
      <Link to="/cart" className="mobile-cart-button">
        <span className="mobile-button-counter">{totalCount}</span>
        <img src={cartButton} alt="Cart button" />
      </Link>
    </div>
  )
}

export default Home
