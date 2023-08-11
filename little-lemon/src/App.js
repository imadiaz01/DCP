import React from 'react';
import { Hero, Nav, Main, Footer } from './Components/Index';
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className="header-nav-container">
        <Nav />
      </div>
      <div className='hero-container' >
      <Hero id='/About'/>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
