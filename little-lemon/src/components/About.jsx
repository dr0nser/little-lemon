import React from 'react'
import RestaurantImage from '../assets/restaurant.jpg'
import ChefsImage from '../assets/chefs.jpg'

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sunt suscipit, beatae quasi officiis unde iusto eaque mollitia nihil aut hic quibusdam vero commodi nostrum. Nesciunt delectus laborum saepe, doloremque pariatur quisquam iusto est, repudiandae nam sed eaque soluta? Explicabo quo eum nemo non. Quis quas ab nostrum in tempore.</p>
      <img src={RestaurantImage} alt="Little Lemon Restaurant" />
      <img src={ChefsImage} alt="Little Lemon Restaurant Chefs" />
    </section>
  )
}

export default About