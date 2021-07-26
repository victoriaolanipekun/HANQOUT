import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'


const Login = () => {
  const history = useHistory()
  const [error, setError] = useState(false)
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })
 
  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setformData(newFormData)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      history.push('/api/hanqout/')
    } catch (err) {
      setError(true)
    }
  }

  const handleFocus = () => {
    setError(false)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="box column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  onFocus={handleFocus}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${error ? 'is-danger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  onFocus={handleFocus}
                />
              </div>
              {error && <p className="help is-danger">Sorry, your username or password are incorrect</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">Login!</button>
            </div>
            <Link to="/register" className="login-register">Not yet registered? Sign up here!</Link>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
