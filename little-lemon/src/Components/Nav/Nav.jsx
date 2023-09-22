import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Nav.css';

const NavLinks = ({ onReservationsClick }) => {
  const handleReservationsClick = (event) => {
    event.preventDefault();
    onReservationsClick();
  };

  return (
    <ul className={`navbar_link`}>
      <li><a href="/Home">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Menu">Menu</a></li>
      <li><a href="/Reservations" onClick={handleReservationsClick}>Reservations</a></li>
      <li><a href="/OrderOnline">Order Online</a></li>
      <li><a href="/Login">Login</a></li>
    </ul>
  );
};

const Nav = ({ onReservationsClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileReservationsClick = (event) => {
    event.preventDefault();
    onReservationsClick();
    setToggleMenu(false);
  };

  return (
    <div className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className='Logo'>
        <a href="/Home" className='Logo'>
          <img  src="logo192.png" alt="Logo Little Lemon" />
        </a>
      </div>
      <NavLinks onReservationsClick={onReservationsClick} />

      <div className='navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul className={`navbar_links`}>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/Reservations" onClick={handleMobileReservationsClick}>Reservations</a></li>
            <li><a href="/OrderOnline">Order Online</a></li>
            <li><a href="/Login">Login</a></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
