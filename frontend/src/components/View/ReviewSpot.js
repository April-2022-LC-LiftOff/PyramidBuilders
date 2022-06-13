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
import Review from "../Reviews/CreateReview";
import { useEffect, useState } from "react";
import showStarRating from "./showStarRating";



export default function ReviewSpots(props){
  const reviewData= props.reviewData
  console.log(reviewData)
  if(!reviewData[0]){
   return (
  <div>
  <div className="card">
       <div className="general">
      <div className="Tilt">
      <h1 className="RSh1">No Reviews here...</h1>
      </div>
      <div className="words">
      <p className="text">

Be the first to Review 
</p>
</div>
      
    
    </div>
    </div>



  </div>)
  }else {
    return (reviewData.map((val, key)=>{ 
      const [userData, setUserData] = useState({})
      useEffect(()=>{
        getUserData()
    },[])

    const userDataLink = "http://localhost:8080/api/profile/get?userId=" + val.userUID

    const getUserData = async()=>{
      const response = await fetch(userDataLink);
      const jsonData = await response.json();
      setUserData(jsonData)
    }
    
    const userProfileLink = "/profile/?userId=" + userData.userUid
    
    return (<div>
    <div className="card">
      <div className="additional">
        <div className="user-card">
          <div className="level center">
          {userData.username}
          </div>
          <div className="points center">
          Registered User
          </div>
          <img width="110" height="110" className="profile-pic center" alt="profile" src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg"></img>
        </div>
        <div className="more-info">
          <h1 className="RSh1"><a href={userProfileLink}>{userData.username}</a></h1>
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
        <h1 className="RSh1">{val.title} {showStarRating(val.rating)}</h1>
        </div>
        <div className="words">
        <p className="text">
  
  {val.reviewText} 
  </p>
  </div>
        <div className="handlebar">
        <div className="columnly">
          <div className="rowly">
            <img className="newimg" src={addfollow} alt="alt"/> 
          </div>
          <div className="rowly">
            <img className="newimg" src={heart} alt="alt"/> 
          </div>
          <div className="rowly"> 
            <img className="newimg" src={users} alt="alt"/>
          </div>
          <div className="rowly">
          <img className="newimg" src={star} alt="alt"/> 
          </div>
        </div>
      </div>
      </div>
      </div>
  
  
  
    </div>)}))
    }
}