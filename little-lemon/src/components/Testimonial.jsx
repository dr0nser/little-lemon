import React from 'react'

const Testimonial = (props) => {
  return (
    <div>
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <h4>{props.rating}</h4>
        <p>{props.testimonial}</p>
    </div>
  )
}

export default Testimonial