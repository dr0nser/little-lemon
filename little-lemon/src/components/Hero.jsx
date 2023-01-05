import React from 'react'
import RestaurantFood from '../assets/restaurantfood.jpg'

const Hero = () => {
  return (
    <section id='#hero'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum qui nemo incidunt, vero impedit deleniti? Voluptate pariatur accusantium impedit.</p>
      <button>Reserve a table</button>
      <img src={RestaurantFood} width="200" alt="Little Lemon Restaurant Food" />
    </section>
  )
}

export default Hero