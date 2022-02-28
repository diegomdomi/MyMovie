import React from 'react'

function Card({title,imgUrl,overview}) {
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
        <a
          href={ "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Go to MOVIE
        </a>
      </div>
    </div>
  )
}

export default Card