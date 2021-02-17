import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Nav from '../components/Nav'
import Products from '../components/Products'
import cartButton from '../assets/img/cart-button.svg'
import './Home.scss'
import { setGoods, setLoading } from '../redux/actions/goods'
import axios from 'axios'


const Home = () => {
  const dispatch = useDispatch()
  const totalCount = useSelector(({ cart }) => cart.totalCount)
  const { items, loading } = useSelector(({ goods }) => goods)

  useEffect(() => {
    axios
      .get('/db.json')
      .then(({ data }) => {
        dispatch(setGoods(data))
      })
  }, [])
  return (
    <div className="home-page">
      <Nav />
      <Slider />
      <Products sectionId="pizzas" title="Пицца" items={items.pizzas} />
      <Products sectionId="snacks" title="Закуски" items={items.snacks} />
      <Products sectionId="desserts" title="Десерты" items={items.desserts} />
      <Products sectionId="drinks" title="Напитки" items={items.drinks} />
      <Link to="/cart" className="mobile-cart-button">
        <span className="mobile-button-counter">{totalCount}</span>
        <img src={cartButton} alt="Cart button" />
      </Link>
    </div>
  )
}

export default Home
