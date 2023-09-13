import React from "react";
import "./Footer.css";
import DisplayIcon from "./DisplayIcon";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer_bar">
      <div className="Footer_bar_width">

<div className="container1">
      <div className="Con2">
        <div className="logo"><DisplayIcon/></div>
      
      <div className="Con3">
          <div className="Copywrite">
            <span>©</span>2023.The Siren. All Rights reserved
          </div>
      </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div>
          <i class="fa fa-location"></i> Hinjewadi, Pune.
        </div>
        <div>
          <i class="fa fa-mobile"></i> +91 7972546650
        </div>
        <div>
          <span>✉</span> support@thesiren.com
        </div>
      </div>

      <div className="Reference">
        <h3 className="References">References</h3>
        <div className="Bollywood"><NavLink to="/bollywood" className="link">Bollywood</NavLink></div>
        <div className="Hollywood"><NavLink to="/hollywood" className="link" >Hollywood</NavLink> </div>
        <div className="Technology"> <NavLink to="/technology" className="link">Technology</NavLink> </div>
        <div className="Fitness"> <NavLink to="/fitness" className="link">Fitness</NavLink> </div>
        <div className="Food"> <NavLink to="/food" className="link" >Food</NavLink> </div>
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;
