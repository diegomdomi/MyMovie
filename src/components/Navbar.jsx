import React from 'react'
import {NavLink} from "react-router-dom"
import ApiTvShow from './ApiTvShow'
import ApiMovie from './ApiMovie'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <NavLink  to="/" exact className="navbar-brand text-light">My Movie</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav position-absolute top-50 end-0 translate-middle">
      <NavLink  to="/" className="nav-link active text-light" aria-current="page">Movies</NavLink>
      <NavLink  to="/tvshow"   className="nav-link text-light" >Tv-Show</NavLink>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar