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
            <div className="buttons">
              <Link to="hanqout/" className="button is-link button is-danger is-rounded is-hovered">Find hanqout</Link>
              <Link to="hanqout/:id/new/" className="button is-outlined is-rounded">Create hanqout</Link>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Made with ❤️ for Developers</strong> 
            </p>
          </div>
        </footer>
      </div>    
      
    </>
  )
}

export default Home
