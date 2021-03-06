import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import './Sidebar.css';
import logo from '../images/Pyramid.gif';



function Sidebar(props) {
  if(props.user){ 
    return (
        <div className="Sidebar">
          <ul className="sidebar_ul">
            <div className="sidebar-holder">
              <img className="logoo" src={logo} alt="loading..." />
            </div>
            <li className="sidebar_li">
              <div className="sidebar_li">
                <span className="icon">
                  <FaIcons.FaHome />
                </span>
                <span className="title"><Link to="/">
                  Home
                </Link></span>
              </div>
              <hr></hr>
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
            
          </ul>
        </div>
      )
     
 }else {
     return (
      <div className="Sidebar">
        <ul className="sidebar_ul">
        <div>
              <img className="logoo" src={logo} alt="loading..." />
            </div>
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
        </ul>
      </div>
    )
 } 
}

export default Sidebar;