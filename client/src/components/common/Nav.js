import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              <Link to="/"><img src="https://i.imgur.com/GjZZwOs.png" alt="Logo" /></Link>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a className="navbar-item">
                About us
              </a>
              <div className="buttons">
                <Link to="login/">
                  <a className="button is-rounded">Login</a>
                </Link>
                <Link to="register/">
                  <a className="button is-link button is-danger is-rounded">Sign up</a>
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