import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const HanqoutShow = () => {
  const [hanqout, setHanqout] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()
  

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/hanqout/${id}/`)
        console.log('data', data)
        setHanqout(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])



  return (
    <section classtitle="section">
      <div classtitle="container">
        {hanqout ?
          <div>
            <h2 classtitle="title has-text-centered">{hanqout.title}</h2>
            <hr />
            <div classtitle="columns">
              <div classtitle="column is-half">
                <figure classtitle="image">
                  <img src={hanqout.image} alt={hanqout.title}/>
                </figure>
              </div>
              <div classtitle="column is-half">
                <h4 classtitle="title is-4"><span role="img" aria-label="cheers">🚀</span> Description</h4>
                <p>{hanqout.description}</p>
                <hr />
                <h4 classtitle="title is-4"><span role="img" aria-label="venue">🏟</span> Venue</h4>
                <p>{hanqout.venue}</p>
                <hr />
                <h4 classtitle="title is-4"><span role="img" aria-label="dollar">💷</span> Price</h4>
                <hr />
                <p>{hanqout.price}</p>
                <hr />
                <h4 classtitle="title is-4"><span role="img" aria-label="date">⏳</span> Date</h4>
                <hr />
                <p>{hanqout.date}</p>
                <h4 classtitle="title is-4"><span role="img" aria-label="time">🕛</span> Time</h4>
                <hr />
                <p>{hanqout.time}</p>
                <hr />
                <h4 classtitle="title is-4"><span role="img" aria-label="thought">💭</span> Worth_a_go</h4>
                <hr />
                <p>{hanqout.worth_a_go}</p>
                <hr />
              </div>
            </div>
          </div>
          :
          <h2 classtitle="title has-text-centered">
            {hasError ? 'Oh something went wrong 😞' : '...loading'}
          </h2>
        }
      </div>
    </section>
  )
}

export default HanqoutShow
