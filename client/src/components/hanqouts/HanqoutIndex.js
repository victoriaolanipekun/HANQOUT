import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HanqoutCard from './HanqoutCard'

const HanqoutIndex = () => {
  const [hanqouts, setHanqouts] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/hanqout/')
        setHanqouts(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

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