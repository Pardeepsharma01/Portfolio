import React from 'react'
import NavbarModule from './NavbarModule.css'
import Logo from './Images/Logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-danger">
    <div className="container-fluid">
      {/* <a className="navbar-brand border border-danger" href="#">Navbar</a> */}
      <img src={Logo}  alt="logo" className="rounded-circle border border-danger logostyle" height={70} />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <a className="nav-link active border border-danger me-5 rounded-pill " aria-current="page" href="#">Home</a>
          <a className="nav-link border border-danger me-5 rounded-pill " href="#">About</a>
          <a className="nav-link border border-danger me-5 rounded-pill" href="#">Tech Stack</a>
          <a className="nav-link border border-danger me-5 rounded-pill" href="#">Projects</a>
          <a className="nav-link border border-danger me-5 rounded-pill" href="#">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar