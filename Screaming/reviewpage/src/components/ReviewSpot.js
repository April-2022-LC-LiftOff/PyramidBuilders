import React from "react";
import { Card } from "react-bootstrap";
import './ReviewSpot.css';
import "./StarRatingNew";
import follow from "../components/images/follow.png";
import addfollow from "../components/images/followery.png";
import trophy from "../components/images/trophy.png";
import camera from "../components/images/video-camera.png";
import friend from "../components/images/following.png";
import users from "../components/images/users.png";
import star from "../components/images/star.png";
import heart from "../components/images/heart.png";



export default function ReviewSpots(){

return (
  <div>
  <div className="card">
    <div className="additional">
      <div className="user-card">
        <div className="level center">
        {/* Horror Reviewer */}
        Horror Reviewer
        </div>
        <div className="points center">
        {/* {points} Points */}
        100,312 Points
        </div>
        {/* {profilePicture} */}
        <img width="110" height="110" className="profile-pic center" alt="profile" src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg"></img>
      </div>
      <div className="more-info">
        <h1>Username</h1>
        <div className="coords">
          <span>Interest #1</span>
          {/* {Interest1} */}
          <span>Interest #2</span>
          {/* {Interest2} */}
        </div>
        <div className="coords">
          <span>Well-Known</span>
          <span>👻👻👻</span>
        </div>
        <div className="stats">
          <div>
          <div className="title">
                Awards
              </div>
              <img className="img" src={trophy} alt="alt"/>
              <div className="value">3</div>
          </div>
          <div>
          <div className="title">
                Films
              </div>
              <img className="img" src={camera} alt="alt"/>
              <div className="value">1000</div>
          </div>
          <div>
          <div className="title">
                Friends
              </div>
              <img className="img" src={friend} alt="alt"/>
              <div className="value">27</div>
            </div>
          <div>
          <div className="title">
                Followers
              </div>
              <img className="img" src={follow} alt="alt"/>
              <div className="value">2</div>
          </div>
        </div>
      </div>
    </div>
    <div className="general">
      <h1>Review Title ★★★★</h1>
      {/* <h1>{title} {stars}</h1> */}
      <p className="text">REview</p>
      {/* <p>{Review}</p> */}
    </div>
    <div className="handlebar">
      <div class="column">
        <div class="row">
          <img className="newimg" src={addfollow} alt="alt"/> 
        </div>
        <div class="row">
          <img className="newimg" src={heart} alt="alt"/> 
        </div>
        <div class="row"> 
          <img className="newimg" src={users} alt="alt"/>
        </div>
        <div class="row">
        <img className="newimg" src={star} alt="alt"/> 
        </div>
      </div>
    </div>
  </div>
  </div>
)
}