import React from 'react'
import GreekSalad from '../assets/greeksalad.jpg'
import Bruchetta from '../assets/bruchetta.jpg'
import LemonDessert from '../assets/lemondessert.jpg'
import FoodCard from './FoodCard'

const FoodCards = () => {
  return (
    <div>
        <FoodCard image={GreekSalad} itemname="Greek Salad" price="$12.99" />
        <FoodCard image={Bruchetta} itemname="Bruchetta" price="$5.99" />
        <FoodCard image={LemonDessert} itemname="LemonDessert" price="$2.99" />
    </div>
  )
}

export default FoodCards