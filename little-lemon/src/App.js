import React, { useState } from 'react';
import { Hero, Nav, Main, Footer } from './Components/Index';
import './App.css';

const App = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  const handleBookingFormClose = () => {
    setShowBookingForm(false);
  };

  return (
    <div className='app'>
      <div className="header-nav-container">
        <Nav onReservationsClick={toggleBookingForm} />
      </div>
      <div className='hero-container'>
        <Hero showBookingForm={showBookingForm} onButtonClick={toggleBookingForm} onClose={handleBookingFormClose} />
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
