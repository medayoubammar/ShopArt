import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h5 className="text-white h4">
        Welcome Admin</h5>
    <Link to="/Login">Admin dashboard</Link>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </nav>
    </>
  )
}
