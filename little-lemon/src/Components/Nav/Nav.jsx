import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
    <ul>
    <li><a href="/Home">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Menu">Menu</a></li>
      <li><a href="/Reservations">Reservations</a></li>
      <li><a href="/OrderOnline">Order Online</a></li>
      <li><a href="/Login">Login</a></li>
    </ul>
  </div>
  )
}

export default Nav