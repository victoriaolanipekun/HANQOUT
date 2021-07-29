import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
import axios from 'axios'
import HanqoutCard from './HanqoutCard'

const HanqoutIndex = ({
  errors,
}) => {
  const [hanqouts, setHanqouts] = useState([])
  const [hasError, setHasError] = useState(false)
  const [locations, setLocations] = useState([])
  //const [updatedLocation, setUpdatedLocation] = useState(null)
  

  // Request to API on first render to get all hanqout
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/hanqout/')
        setHanqouts(data)
        console.log('data', data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/locations/')
        setLocations(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])


  const getHanquotByLocation  = async (locate) => {
    try {
      let result = null
      if (locate !== '') {
        result = await axios.get(`/api/hanqout/locations/${locate}`)
      } else {
        result = await axios.get('/api/hanqout/')
      }
      
      
      let data = null
      if (result.data.id !== undefined) {
        data = []
        data.push(result.data)
      } else {
        data = result.data
      }

      setHanqouts(data)
    } catch (err) {
      setHasError(true)
    }
  }


  const handleChange = (event) => {
    // const newArray = locations.filter((item) => {
    //   return item.id >= parseFloat(event.target.value)
    // })
    console.log('Hello=>', event.target.value)

    //Call the new hanquots based on the location
    getHanquotByLocation(event.target.value)
  }


  return (
    <>
      <section className="section">
        <div className="field">
          <label className="label">Locations</label>
          {locations ?
            <div className="select is-warning">
              <select
                className={`select ${errors ? 'is-danger' : ''}`}
                name="locations"
                onChange={handleChange}
                  
              >
                <option value="">All</option>
                {locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            :
            <h2 className="title has-text-centered">
              {hasError ? 'Something went wrong 😞' : '...loading'}
            </h2>
          }
        </div>
        <div className="container">
          {hanqouts.length > 0 ?
            <div className="columns is-multiline">
              {hanqouts.map(hanqout => (
                <HanqoutCard key={hanqout._id} {...hanqout} />
              ))}
            </div>
            :
            <h2 className="title has-text-centered">
              {hasError ? 'Something went wrong 😞' : '...loading'}
            </h2>
          }
        </div>

        {/* {updatedLocations.length > 0 ? 
          <>
            <div className="columns is-multiline">
              {updatedLocations.map(item => {
                return (
                  <HanqoutCard key={item.id} {...item} />
                )
              })}
            </div>
          </>
          :
          <>
            <div className="columns is-multiline">
              {locations.map(item => {
                return (
                  <HanqoutCard key={item.id} {...item} />
                )
              })}
            </div>
          </>
        } */}
      </section>
    </>  
  )
}

export default HanqoutIndex