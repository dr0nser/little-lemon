import React from 'react'

const FoodCard = (props) => {
  return (
    <div>
        <img width={200} src={props.image} alt={props.itemname} />
        <h4>{props.itemname}</h4>
        <h4>{props.price}</h4>
        <p>{props.description}</p>
        <button>Order for delivery</button>
    </div>
  )
}

export default FoodCard