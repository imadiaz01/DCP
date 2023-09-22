import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container' >
      <div className='footer-inside' >
      <footer>
      <menu>

          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>239 HWY 5th Av</li>
            <li>Long Island, New York</li>
            <br></br>
            <li>(321)-585-6897</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>

          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/littlelemon/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/littlelemon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/c/littleLemon"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
      </menu>
    </footer>
        </div>
        </div>
  )
}

export default Footer

