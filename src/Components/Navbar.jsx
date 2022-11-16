import React from 'react'
import logo from '../assets/logo.svg'
import circle from '../assets/account_circle.svg'
import './Css/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <div className="content">
          <div className="logo">
              <img src={logo} alt="" />
          </div>
          <div className="link">
            <ul>
              
              <li>Home</li>
              <li>Bantuan</li>
              <li><img src={circle} alt="" /></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar