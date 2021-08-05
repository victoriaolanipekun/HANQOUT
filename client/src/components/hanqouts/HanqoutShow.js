import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage, getPayload } from '../../helpers/auth'


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

  const userIsOwner = (userId) => {
    const payload = getPayload()
    if (!payload) return false
    return userId === payload.sub
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/hanqout/${id}`, {
        headers: { 
          Authorization: `Bearer ${getTokenFromLocalStorage()}`, 
        },
      })
      history.push('/hanqout/')
    } catch (err) {
      console.log(err)
    }
  }

  //console.log('HAN=>', hanqout)

  return (
    <section classtitle="section">
      <div classtitle="container">
        {hanqout ?
          <div>
            <div classtitle="columns">
              <div classtitle="column is-half">
                <figure classtitle="image">
                  <img src={hanqout.image} alt={hanqout.title}/>
                  {/* <h2 classtitle="title has-text-centered">{hanqout.title}</h2> */}
                </figure>
              </div>
              <div></div>
              <div classtitle="column is-half">
                <h2 classtitle="title has-text-centered"><span role="img" aria-label="cheers">📕</span><strong>Description</strong></h2>
                <p>{hanqout.title}</p>
                <h4 classtitle="title is-4"><span role="img" aria-label="cheers">🚀</span> <strong>Description</strong></h4>
                <p>{hanqout.description}</p>
                <h4 classtitle="title is-4"><span role="img" aria-label="venue">🏟</span> <strong>Venue</strong></h4>
                <p>{hanqout.venue}</p>
                <h4 classtitle="title is-4"><span role="img" aria-label="dollar">💷</span> <strong>Price</strong></h4>
                <p>{hanqout.price}</p>
                <h4 classtitle="title is-4"><span role="img" aria-label="date">⏳</span> <strong>Date</strong></h4>
                <p>{hanqout.date}</p>
                <h4 classtitle="title is-4"><span role="img" aria-label="time">🕛</span><strong>Time</strong></h4>
                <p>{hanqout.time}</p>
                {/* <h4 classtitle="title is-4"><span role="img" aria-label="thought">💭</span> Worth_a_go</h4>
                <p>{hanqout.worth_a_go}</p> */}
                {userIsOwner(hanqout.owner.id) &&
                  <div className="buttons">
                    <Link to={'/hanqout/'}onClick={handleDelete} className="button is-danger">Delete Hanqout</Link>
                    <Link to={'/hanqout/:id/edit/'} className="button is-warning">Edit Hanqout</Link>
                  </div>
                }
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
