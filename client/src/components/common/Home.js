import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>  
      <div className="homepage">
        <section className="hero is-large is-info">
          <div className="hero-body">
            <p className="title">
          Find the best <br></br>
              <span className="style">hanqout</span> places 
            </p>
            <h2 className="sub-title">
          The very best of us developers, need to relax   <br></br>
          find the ways to do just that, with Hanqout.
            </h2>
            <div className="buttons">
              <Link to="hanqout/" className="button is-link button is-danger is-rounded is-hovered">Find hanqout</Link>
              <Link to="hanqout/:id/new/" className="button is-outlined is-rounded">Create hanqout</Link>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p><small>
            Made with   <span className ="footer-heart">❤️</span>   for Developers
            </small>
            </p>
          </div>
        </footer>
      </div>    
      
    </>
  )
}

export default Home
