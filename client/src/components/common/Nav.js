import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item"><img src="https://i.imgur.com/GjZZwOs.png" alt="Logo" /></Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a className="navbar-item">
                About us
              </a>
              <div className="buttons">
                <Link to="/login/" className="button is-rounded">Login
                </Link>
                <Link to="/register/" className="button is-link button is-danger is-rounded">Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar