import React from 'react'
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" role="img" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order-Online</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </header>
  )
}

export default Header