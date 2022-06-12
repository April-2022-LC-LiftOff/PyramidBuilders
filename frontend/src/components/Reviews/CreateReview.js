import React, { Component } from "react";
import StarRating from "./StarRating";
import "./ReviewPageCSS.css";

import { Star } from "react-bootstrap-icons";

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
            <div className="header container"> Write a review </div>
                       
            <form className="FormContainer" >
                    <input type="text" name="movieId"  onChange = {(e) => this.movieId = e.target.value}placeholder="Input movie ID" required/>
                                        
                    <input type="text" name="title" onChange = {(e) => this.title = e.target.value} placeholder="Give your review a title" required/>

                    <div>Your rating: </div>
                    <StarRating name="rating" value={StarRating.rating} onChange = {(e) => this.rating = e.target.value} /> 
                
                    
                    <input type="text" name="reviewText" onChange = {(e) => this.reviewText = e.target.value}className="Input password" placeholder="Write your review here" required/>
                    
                <button type="submit" className="SubmitButton" onClick={this.handleSubmit}>Save Review</button>
                </form>
        </div>
    )
}
}
