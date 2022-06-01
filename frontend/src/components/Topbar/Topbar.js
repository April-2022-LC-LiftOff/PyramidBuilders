import React, { Component } from 'react'
import {UserTopbarData, GuestTopbarData} from './TopbarData'
import './Topbar.css';


export default class Topbar extends Component {

  render(){

    if(this.props.user){
      return (<nav className="topbar">
      <ul className="topbar-nav">
        
        {UserTopbarData.map((val, key) => {
          return (
            <li 
              key={val.title}
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
    return (
    //   <nav className="topbar">
    //     <ul className="topbar-nav"> { props.children } </ul>
    //   </nav>


<nav className="topbar">
      <ul className="topbar-nav">
        {GuestTopbarData.map((val, key) => {
          return (
            <li 
              key={val.title}
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
}

