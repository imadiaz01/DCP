import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-central-container'>
    <div className='hero-left'>
    <h1>Little Lemon</h1>
    <h6>Chicago</h6>
    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
    <button className='button' > Reserve a Table </button>
    </div>
    <div className='hero-right'>
  <div className='hero-right-img'>
  <img src="Greek-Salad-main.webp" alt="Greek Salad" /> </div>
    </div>
    </div>
  )
}

export default Hero