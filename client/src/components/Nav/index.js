import React from "react";
import "./style.css";
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    
    <nav className="navbar navbar-light" id="blue" style={{ backgroundColor: "#637a9e" }}>
  <NavLink className="navbar-brand" to="/" id="shadow" style={{ color: "#4e5868" }}>Google Books</NavLink>
  <NavLink className="navbar-brand" id="kit" to="/">Search</NavLink>
  <NavLink className="navbar-brand" id="kat" to="/books/:id">View</NavLink>

</nav>
  );
}
export default Nav;


