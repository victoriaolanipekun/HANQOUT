import React from 'react'
import { Link } from 'react-router-dom'

const HanqoutCard = ({ id, title, description, image, price }) => {
  return (
    <div className="show-page column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/hanqout/${id}/`}>
        <div className="card">
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={title}/>
            </figure>
          </div>
          <div className="card-header">
            <div className="card-header-title">{title}</div>
          </div>
          <div className="card-content">
            <h5>{description} </h5>
            <h5><strong>Price: </strong>{price} </h5>
          </div>
          <div className="card-content">
            <div className="join-btn">
              <Link to="/profile/" className="button is-danger is-light is-rounded"><strong>Join Now</strong></Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HanqoutCard