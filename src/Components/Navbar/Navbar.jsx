// import React from 'react'
// import './NavbarModule.css'
// import Logo from '../Images/Logo.jpg';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg  border border-danger navbar sticky-top bg">
//     {/* // <nav className="navbar navbar-expand-lg bg-body-tertiary border border-danger navbar "> */}
//     <div className="container-fluid">
//       {/* <a className="navbar-brand border border-danger" href="#">Navbar</a> */}
//       <img src={Logo}  alt="logo" className="rounded-circle border border-danger logostyle" height={50} />
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
//         <div className="navbar-nav text_size links">
//           <a className="nav-link  me-5 rounded-pill  " aria-current="page" href="#">Home</a>
//           <a className="nav-link me-5 rounded-pill  " href="#">About</a>
//           <a className="nav-link me-5 rounded-pill " href="#">Tech Stack</a>
//           <a className="nav-link me-5 rounded-pill " href="#">Projects</a>
//           <a className="nav-link  me-5 rounded-pill  " href="#">Contact</a>
//           </div>
//           </div>
//     </div>
//   </nav>

//   )
// }

// export default Navbar

import React from "react";
import "./NavbarModule.css";
import Logo from "../Images/Logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  border border-danger navbar sticky-top bg">
      {/* // <nav className="navbar navbar-expand-lg bg-body-tertiary border border-danger navbar "> */}
      <div className="container-fluid">
        {/* <a className="navbar-brand border border-danger" href="#">Navbar</a> */}
        <img
          src={Logo}
          alt="logo"
          className="rounded-circle border border-danger logostyle"
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
          <div className="navbar-nav text_size links">
          <a className="nav-link  me-5 rounded-pill  " aria-current="page" href="#">Home</a>
          <a className="nav-link me-5 rounded-pill  " href="#">About</a>
          <a className="nav-link me-5 rounded-pill " href="#">Tech Stack</a>
          <a className="nav-link me-5 rounded-pill " href="#">Projects</a>
          <a className="nav-link  me-5 rounded-pill  " href="#">Contact</a>
          

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
