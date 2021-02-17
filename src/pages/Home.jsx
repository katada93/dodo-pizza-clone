import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Nav from '../components/Nav'
import Products from '../components/Products'
import cartButton from '../assets/img/cart-button.svg'
import './Home.scss'


const Home = () => {
  const totalCount = useSelector(({ cart }) => cart.totalCount)

  return (
    <div className="home-page">
      <Nav />
      <Slider />
      <Products sectionId="pizzas" title="Пицца" fetch="pizzas" />
      <Products sectionId="snacks" title="Закуски" fetch="snacks" />
      <Products sectionId="desserts" title="Десерты" fetch="desserts" />
      <Products sectionId="drinks" title="Напитки" fetch="drinks" />
      <Link to="/cart" className="mobile-cart-button">
        <span className="mobile-button-counter">{totalCount}</span>
        <img src={cartButton} alt="Cart button" />
      </Link>
    </div>
  )
}

export default Home
