import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Register = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await axios.post('/api/auth/register/', formData)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${errors.username ? 'is-danger' : ''}`}
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  value={formData.username}
                />
              </div>
              {errors.username && <p className="help is-danger">{errors.username}</p>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${errors.email ? 'is-danger' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </div>
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${errors.password ? 'is-danger' : ''}`}
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
              </div>
              {errors.password && <p className="help is-danger">{errors.password}</p>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${errors.password_confirmation ? 'is-danger' : ''}`}
                  placeholder="Password Confirmation"
                  onChange={handleChange}
                  name="password_confirmation"
                  value={formData.password_confirmation}
                />
              </div>
              {errors.password_confirmation && <p className="help is-danger">{errors.password_confirmation}</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">Join Hanqout</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
