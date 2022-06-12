import React from "react";
import { Card } from "react-bootstrap";
import './ReviewSpot.css';
import "./StarRatingNew";
import follow from "./images/follow.png"
import friend from "./images/following.png";
import camera from "./images/video-camera.png";
import trophy from "./images/trophy.png";
import addfollow from "./images/followery.png";
import heart from "./images/heart.png";
import users from "./images/users.png";
import star from "./images/star.png";



export default function ReviewSpots(props){
  const {user} = props;
return (
  <div>
  <div className="card">
    <div className="additional">
      <div className="user-card">
        <div className="level center">
        Horror Reviewer
        </div>
        <div className="points center">
        100,312 Points
        </div>
        <img width="110" height="110" className="profile-pic center" alt="profile" src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg"></img>
      </div>
      <div className="more-info">
        <h1 className="RSh1">Username</h1>
        <div className="coords">
          <span>Interest #1</span>
          <span>Interest #2</span>
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
      <div className="Tilt">
      <h1 className="RSh1">Review Title ★★★★</h1>
      </div>
      <div className="words">
      <p className="text">

Minima nihil laboriosam non excepturi accusamus. In voluptatibus adipisci rerum atque quam. Ab sunt voluptatem ducimus qui nostrum quam.

Nesciunt quaerat repellendus nihil et quos excepturi natus quam. Explicabo illum possimus et ducimus aliquid consequatur. 
</p>
</div>
      <div className="handlebar">
      <div class="columnly">
        <div class="rowly">
          <img className="newimg" src={addfollow} alt="alt"/> 
        </div>
        <div class="rowly">
          <img className="newimg" src={heart} alt="alt"/> 
        </div>
        <div class="rowly"> 
          <img className="newimg" src={users} alt="alt"/>
        </div>
        <div class="rowly">
        <img className="newimg" src={star} alt="alt"/> 
        </div>
      </div>
    </div>
    </div>
    </div>



  </div>
)
}