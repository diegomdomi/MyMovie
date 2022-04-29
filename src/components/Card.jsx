import React from 'react'
import {NavLink} from "react-router-dom"

function Card({title,imgUrl,overview,type,id}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp p-2">
      <div className="overflow">
        <img src={imgUrl} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary ">
          {overview
            ? overview.substring(0,50)
            : "sin referencia"}
        </p>
        <NavLink  to={`/moviedetail/${type}/${id}`}
          
          className="btn btn-outline-secondary border-1"
          rel="noreferrer"
        >
          Go 
        </NavLink>
      </div>
    </div>
  )
}

export default Card