import React from 'react'
import './NavBar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-container">
      <div>Image Uploader Demo</div>
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/upload">
          Upload
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
