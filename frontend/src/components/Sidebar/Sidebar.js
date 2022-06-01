import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import './Sidebar.css';



function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="sidebar_ul">
        
        <li className="sidebar_li">
          <div className="sidebar_li">
            <span className="icon">
              <FaIcons.FaHome />
            </span>
            <span className="title"><Link to="/">
              Home
            </Link></span>
          </div>
        </li>

        <li className="sidebar_li">
          <div className="sidebar_li">
            <span className="icon">
              <FaIcons.FaUser/>
            </span>
            <span className="title"><Link to="/profile">
              My Profile
            </Link></span>
          </div>
        </li>

        <li className="sidebar_li">
          <div className="sidebar_li">
            <span className="icon">
              <FaIcons.FaComment />
            </span>
            <span className="title"><Link to="/review">
              Write a Review
            </Link></span>
          </div>
        </li>


      </ul>
    </div>
  )
}

export default Sidebar;