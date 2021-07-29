import React from 'react'
import { Link } from 'react-router-dom'

const HanqoutCard = ({ id, title, description, image, price }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
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
            <h5>Description: {description} </h5>
            <h5>Price: {price} </h5>
          </div>
          <div className="card-content">
            {/* <div>{locations.map(location => (
              <HanqoutCard key={location._id} name={locations.name} id={location.id}/>
            ))}
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HanqoutCard