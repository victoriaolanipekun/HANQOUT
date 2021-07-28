import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HanqoutCard from './HanqoutCard'

const HanqoutIndex = () => {
  const [hanqouts, setHanqouts] = useState(null)
  // const [filteredHanqouts, setFilteredHanqouts] = useState(hanqouts)
  const [hasError, setHasError] = useState(false)
  const [locations, setLocations] = useState(null)
  //const [categories, setCategories] = useState(null)
  // const hanqoutLocation = ['All'] 
  // const variousCategories = ['All']
  // let name = 'All'
  // let categories = 'All'
  // const searchHanqouts = ''
  //const searchLocations = ''
  // const searchCategories = ''

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

  // Request to API on first render to get all locations
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/locations/')
        setLocations(data)
        console.log('data', data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  // Mapping through for 'All' hanqout name
  const getNames = () => {
    // locations.map(location => {
    //   if (!hanqoutLocation.includes(location.name)) {
    //     hanqoutLocation.push(location.name) 
    //   }
    // })
    console.log('MyLOCA=>', locations)
    // locations.map(location => {
    //   console.log('Location=>', location.name)
    // })
  }

  // // Filtering hanqouts
  // const filterHanqouts = () => {
  //   const regexSearch = new RegExp(searchHanqouts, 'i')
  //   console.log('regexSearch ->', regexSearch)
  //   const filteredArray = hanqouts.filter(hanqout => {
  //     return (
  //       regexSearch.test(hanqout.locations === locations || locations === 'All') && (hanqout.categories === categories || categories === 'All')
  //     )
  //   })
  //   setFilteredHanqouts(filteredArray)
  //   console.log('HANQOUTS ARRAY FILTERED ->', filteredArray)
  // }

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get('/api/categories/')
  //       setCategories(data)
  //     } catch (err) {
  //       setHasError(true)
  //     }
  //   }
  //   getData()
  // }, [])

  getNames()

  return (
    <section className="section">
      <div className="container">
        {hanqouts ?
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
    </section>
  )
}

export default HanqoutIndex