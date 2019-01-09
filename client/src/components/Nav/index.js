import React from "react";
import "./style.css";

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List
    //   </a>
    // </nav>
    <nav className="navbar navbar-light" id="blue" style={{ backgroundColor: "#637a9e" }}>
  <a className="navbar-brand" href="/" id="shadow" style={{ color: "#4e5868" }}>Google Books</a>
  <a className="navbar-brand" href="/">Search</a>
  <a className="navbar-brand" id="view" href="/">View</a>

</nav>
  );
}
export default Nav;


