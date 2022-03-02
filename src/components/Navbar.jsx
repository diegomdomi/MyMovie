import React from 'react'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#!">My Movie</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav position-absolute top-50 end-0 translate-middle">
        <a className="nav-link active text-light" aria-current="page" href="#!">Movies</a>
        <a className="nav-link text-light" href="#!">Tv-Show</a>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar