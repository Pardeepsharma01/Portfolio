import React from "react";
import "./NavbarModule.css";
import Logo from "../Images/Logo.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg   navbar sticky-top bg ">
      <div className="container-fluid">
        <img
          src={Logo}
          alt="logo"
          className="rounded-circle  logostyle"
          height={50}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text_size links" >
          <a className="nav-link  me-5 rounded-pill " aria-current="page" href="#Home">Home</a>
          <a className="nav-link me-5 rounded-pill  " href="#About">About</a>
          <a className="nav-link me-5 rounded-pill " href="#Tech">Tech Stack</a>
          <a className="nav-link me-5 rounded-pill " href="#Project">Projects</a>
          <a className="nav-link  me-5 rounded-pill  " href="#Contact" >Contact</a>
          

          </div>

          {/* <div className="navbar-nav text_size links">
            <Link to="/" className="nav-link me-5 rounded-pill">
              Home
            </Link>
            <Link to="/about" className="nav-link me-5 rounded-pill">
              About
            </Link>
            <Link to="/tech" className="nav-link me-5 rounded-pill">
              Tech Stack
            </Link>
            <Link to="/projects" className="nav-link me-5 rounded-pill">
              Projects
            </Link>
            <Link to="/contact" className="nav-link me-5 rounded-pill">
              Contact
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

