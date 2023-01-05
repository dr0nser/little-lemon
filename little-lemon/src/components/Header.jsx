import React from 'react'
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Little Lemon logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#highlights">Menu</a></li>
          <li><a href="#hero">Reservations</a></li>
          <li><a href="#highlights">Order-Online</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header