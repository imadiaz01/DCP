import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; // Corrected import statement
import './Nav.css';

const Menu = () => (
  <>
    <ul className='navbar_links'>
      <li><a href="/Home">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Menu">Menu</a></li>
      <li><a href="/Reservations">Reservations</a></li>
      <li><a href="/OrderOnline">Order Online</a></li>
      <li><a href="/Login">Login</a></li>
    </ul>
  </>
);

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='Logo'>
        <img src="logo192.png" alt="Logo Little Lemon" />
      </div>
      <div className='menu_links'>
        <Menu />
      </div>

      <div className='navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className='nav_mobile_menu'>
            <div className='nav_mobile_menu_container'>
              {<Menu />}
            </div>
          </div> // Closing tag was missing here
        )}
      </div>
    </div>
  );
};

export default Nav;
