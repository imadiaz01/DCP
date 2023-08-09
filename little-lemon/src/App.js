import React from 'react';
import { Header, Nav, Main, Footer } from './Components/Index';
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className="header-nav-container">
        <Nav />
      </div>
      <Header id='/About' />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
