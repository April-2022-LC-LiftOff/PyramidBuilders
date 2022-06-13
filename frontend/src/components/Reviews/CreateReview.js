import React, { Component } from "react";
import StarRating from "./StarRating";
import "./ReviewPageCSS.css";

import { Star } from "react-bootstrap-icons";
import GetMovie from "./GetMovie";

export default class Review extends Component {
    handleSubmit = async (e) =>{
        e.preventDefault();

        const data = {
            movieId: this.movieId,
            rating: this.rating,
            reviewText: this.reviewText,
            title: this.title,
            userUID: this.props.user.userID
        }

        const url = "http://localhost:8080/api/review/create"

        try{ 
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();

            let token = responseData.token

            localStorage.setItem("token", token);  

            window.location.replace('/profile')
           
        } catch (err){
            console.log(err.message)
        }
            
    }
        
    render() {
        return (  
            <div className="container">
                <div className="header"> Write a review </div>
                
                <form className="FormContainer" >

                    {/* <input type="text" name="movieId"  onChange = {(e) => this.movieId = e.target.value}placeholder="Input movie ID" required/> */}
           

                    <div className="section">
                    <div className="main">Select a movie to review: </div>
                    <GetMovie onChange = {(e) => this.movieId = e.target.imdbID}/>                   
                    </div>

                    <div className="section">
                    <div className="main">Review title: </div>
                    <input type="text" name="title" onChange = {(e) => this.title = e.target.value} placeholder="Give your review a title" required/>
                    </div>

                    <div className="section">
                    <div className="main">Your rating: </div>
                    <select onChange = {(e) => this.rating = e.target.value}>
                        <option value={1}>
                            <span className="star">&#9733;</span>
                        </option>
                        <option value={2}>
                            <span className="star">&#9733; &#9733;</span>                        
                        </option>
                        <option value={3}>
                            <span className="star">&#9733; &#9733; &#9733;</span>
                        </option>
                        <option value={4}>
                            <span className="star">&#9733; &#9733; &#9733; &#9733;</span>
                        </option>
                        <option value={5}>
                            <span className="star">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                        </option>
                    </select>
                    {/* <StarRating name="rating" 
                    value={4}
                    // value={StarRating.rating} 
                    // onChange = {(e) => this.rating = e.target.value} 
                    // onChange = {(e) => this.rating = e.target.imdbID}
                    />  */}
                    
                    </div>

                    <div className="section">
                    <div className="main">Your review: </div>
                    <input type="text" name="reviewText" onChange = {(e) => this.reviewText = e.target.value}className="Input password" placeholder="Write your review here" required/>
                    </div>

                    <button type="submit" className="SubmitButton" onClick={this.handleSubmit}>Save Review</button>
                </form>
            </div>
        )
    }

}