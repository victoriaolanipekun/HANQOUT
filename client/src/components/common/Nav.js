import React, { useState, useEffect }  from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getPayload } from '../../helpers/auth'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const history = useHistory()

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }
  
  return (
    <nav className="navbar">
      <div className="container">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item"><img src="https://i.imgur.com/GjZZwOs.png" alt="Logo" /></Link>
          </div>
          <span onClick={handleMenuToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="navbar-item">
                About us
              </a>
              {!userIsAuthenticated() ?
                <>
                  <div className="buttons">
                    <Link to="/login/" className="button is-rounded">Login
                    </Link>
                    <Link to="/register/" className="button is-link button is-danger is-rounded">Sign up
                    </Link>
                  </div>
                </>
                :
                <button className="button is-danger" onClick={handleLogout}>Log Out</button>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar