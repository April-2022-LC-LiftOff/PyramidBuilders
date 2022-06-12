import React from "react";
import { Card } from "react-bootstrap";
import './ReviewSpot.css';
import "./StarRatingNew";
import follow from "../images/follow.png"
import friend from "../images/following.png";
import camera from "../images/video-camera.png";
import trophy from "../images/trophy.png";
import addfollow from "../images/followery.png";
import heart from "../images/heart.png";
import users from "../images/users.png";
import star from "../images/star.png";
import Review from "../Reviews/CreateReview";


export default function ReviewSpots(){
  // let n = reviewStars;
  // let stars = []
  // for (let i = 0; i < reviewStars.length; i++){
  //   stars.push(<span><i class="fa-solid fa-star"></i></span>);
  // } 

return (
  <div>
  <div className="card">
    <div className="additional">
      <div className="user-card">
        <div className="level center">
        {/* Horror Reviewer */}
        {interest} Reviewer
        </div>
        <div className="points center">
        {/* {points} Points */}
        100,312 Points
        </div>
        {/* {profilePicture} */}
        <img width="110" height="110" className="profile-pic center" alt="profile" src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg"></img>
      </div>
      <div className="more-info">
        <h1>{Props.user.username}</h1>
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
      <h1>{Review.Title} ★★★★</h1>
      {/* <h1>{title} {stars}</h1> */}
      <p className="text">{Review.review}</p>
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