import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HanqoutForm = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  buttonText = 'Submit',
}) => {

  const [locations, setLocations] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/locations/')
        setLocations(data)
        console.log('Locations', data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  return (
    <div className="columns">
      <form
        className="column is-half is-offset-one-quarter box"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label className="label">Title </label>
          <div className="control">
            <input
              className={`input ${errors.title ? 'is-danger' : ''}`}
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={formData.title}
            />
          </div>
          {errors.title && <p className="help is-danger">{errors.title}</p>}
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className={`input ${errors.description ? 'is-danger' : ''}`}
              placeholder="Description...."
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          {errors.description && <p className="help is-danger">{errors.description}</p>}
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className={`input ${errors.image ? 'is-danger' : ''}`}
              placeholder="Image URL"
              name="image"
              onChange={handleChange}
              value={formData.image}
            />
          </div>
          {errors.image && <p className="help is-danger">{errors.image}</p>}
        </div>
        <div className="field">
          <label className="label">Venue</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.venue ? 'is-danger' : ''}`}
              placeholder="Venue"
              name="venue"
              onChange={handleChange}
              value={formData.venue}
            />
          </div>
          {errors.venue && (
            <p className="help is-danger">{errors.venue}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Date</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.date ? 'is-danger' : ''}`}
              placeholder="Date"
              name="date"
              onChange={handleChange}
              value={formData.date}
            />
          </div>
          {errors.venue && (
            <p className="help is-danger">{errors.date}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Time</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.time ? 'is-danger' : ''}`}
              placeholder="Time"
              name="time"
              onChange={handleChange}
              value={formData.time}
            />
          </div>
          {errors.venue && (
            <p className="help is-danger">{errors.time}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.price ? 'is-danger' : ''}`}
              placeholder="Price"
              name="price"
              onChange={handleChange}
              value={formData.price}
            />
          </div>
          {errors.venue && (
            <p className="help is-danger">{errors.price}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Keywords</label>
          <div className="control">
            <textarea
              className={`textarea ${errors.keywords ? 'is-danger' : ''}`}
              placeholder="Keywords"
              name="keywords"
              onChange={handleChange}
              value={formData.keywords}
            />
          </div>
          {errors.venue && (
            <p className="help is-danger">{errors.keywords}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Locations</label>
          {locations ?
            <div className="select is-warning">
              <select
                className={`select ${errors.locations ? 'is-danger' : ''}`}
                name="locations"
                onChange={handleChange}
              >
                {locations.map(location => (
                  <option key={location._id} value={location._id}>{location.name}</option>
                ))}
              </select>
            </div>
            :
            <h2 className="title has-text-centered">
              {hasError ? 'Something went wrong 😞' : '...loading'}
            </h2>
          }
        </div>
        <div className="field">
          <button type="submit" className="button is-warning is-fullwidth">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  )
}

export default HanqoutForm
