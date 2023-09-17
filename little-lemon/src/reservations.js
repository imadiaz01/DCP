import React from 'react';
import { Hero, Nav, Main, Footer, BookingForm } from './Components/Index';
import './App.css'

const reservation = () => {
  return (
    <div className='app'>
      <div className="header-nav-container">
        <Nav />
      </div>
      <div className='hero-container' >
      <BookingForm></BookingForm>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default reservation;
