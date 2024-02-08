import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border border-danger">
    <div class="container-fluid">
      <a class="navbar-brand border border-danger" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div class="navbar-nav ">
          <a class="nav-link active border border-danger me-5" aria-current="page" href="#">Home</a>
          <a class="nav-link border border-danger me-5 " href="#">About</a>
          <a class="nav-link border border-danger me-5" href="#">Tech Stack</a>
          <a class="nav-link border border-danger me-5" href="#">Projects</a>
          <a class="nav-link border border-danger me-5" href="#">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar