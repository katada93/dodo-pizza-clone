import React from 'react'
import Slider from '../components/Slider'
import Nav from '../components/Nav'
import Products from '../components/Products'


const Home = () => {
  return (
    <div className="home-page">
      <Nav />
      <Slider />
      <Products sectionId="pizzas" title="Пицца" fetch="pizzas" />
      <Products sectionId="snacks" title="Закуски" fetch="snacks" />
      <Products sectionId="desserts" title="Десерты" fetch="desserts" />
      <Products sectionId="drinks" title="Напитки" fetch="drinks" />
    </div>
  )
}

export default Home
