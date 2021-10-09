import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm justify-content-between gray py-0">
      <span className="badge">
        <h2 className="darkBlue titleFont">
          LX Jordon Bobo
        </h2>
      </span>
      <div>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/" className= "nav-link active text-dark hover">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className= "nav-link active text-dark hover">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className= "nav-link active text-dark hover">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
