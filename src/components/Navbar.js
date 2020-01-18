import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-unordered-list">
        <li className="nav-list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/data">Data</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
