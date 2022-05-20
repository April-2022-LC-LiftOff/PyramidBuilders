import React from 'react'
import {TopbarData} from './TopbarData'
import './Topbar.css';
import Login from '../contentPages/Login';

function Topbar(props) {
    return (
    //   <nav className="topbar">
    //     <ul className="topbar-nav"> { props.children } </ul>
    //   </nav>


<nav className="topbar">
      <ul className="topbar-nav">
        {TopbarData.map((val, key) => {
          return (
            <li 
              key={Login}
              className="row"
              id={window.location.pathName == val.link ? "active" : ""}
              onClick={()=> {window.location.pathname = val.link;
              }}
            >
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </nav>
    );
  }


export default Topbar