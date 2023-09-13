import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div>
      <nav>
      <input type="checkbox" id="check" />
        <label for="check">
          <i class="fas fa-bars" id="btn"></i>
          <i class="fas fa-x" id="cancel"></i>
        </label>
        <ul>
          <li>
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Bollywood" className="nav_link">
              Bollywood
            </Link>
          </li>
          <li>
            <Link to="/Technology" className="nav_link">
              Technology
            </Link>
          </li>
          <li>
            <Link to="/Hollywood" className="nav_link">
              Hollywood
            </Link>
          </li>
          <li>
            <Link to="/Fitness" className="nav_link">
              Fitness
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/Food" className="nav_link">
              Food
            </Link>
          </li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Nav;
