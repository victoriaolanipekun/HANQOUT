import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>      
      <section className="hero is-large is-info">
        <div className="hero-body">
          <p className="title">
          Find the best <br></br>
            <span className="style">hanqout</span> places 
          </p>
          <div className="buttons">
            <Link to="api/hanqout/"><a className="button is-link button is-danger is-rounded">Find hanqout</a></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
