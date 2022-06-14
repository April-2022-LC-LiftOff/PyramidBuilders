import React, { Component } from "react";
import './Viewer.css';
import StarRatingNew from "./StarRatingNew";
import ReviewSpots from "./ReviewSpot";
import { useState } from "react";
import { useEffect } from "react";
import useQuery from "../contentPages/shared/useQuery";
import showStarRating from "./showStarRating";

const Viewer = (props) => {

    const [movieData, setMovieData] = useState({});
    const [reviewsData, setReviewsByMovie ] = useState({});
    const [averageRating, setAverageRating] = useState('');
    const query = useQuery();
    const movieId = query.get("movieId")
    const pageLink = '/film/?movieId=' + movieId;

    useEffect(()=>{
        getMovieData()
    },[])
    useEffect(()=>{
        getMovieReviewsByID()
    }, []);
    useEffect(()=>{
        getAverageRating()
    }, [])
    
    const ReviewPullApiUrl = "http://localhost:8080/api/review/getAll?movieId=" + movieId
    const movieAPIPull = "http://www.omdbapi.com/?apikey=84a99a76&i=" + movieId
    const ratingPull = "http://localhost:8080/api/review/getAvgRating?movieId=" + movieId

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const getMovieData = async()=>{
      await fetch(movieAPIPull, requestOptions)
      .then(response => response.json())
      .then((result) => {setMovieData(result)
    console.log(result)})
      .catch(error => console.log('error', error));
    }
      const getMovieReviewsByID= async()=>{
      await fetch(ReviewPullApiUrl, requestOptions)
        .then(response => response.json())
        .then((result) => {setReviewsByMovie(result)}
        )
        .catch(error => console.log('error', error));
      }

      const getAverageRating = async()=>{
        await fetch(ratingPull, requestOptions)
        .then(response => response.text())
        .then(result => {setAverageRating(result)
        console.log(result)})
        .catch(error => console.log('error', error));
      }
      
    const {movie} = props;

    const [rating, setRating] = useState('')
    const handleRatingChange = e => {
        setRating(e.target.value)
    }

    const [reviewText, setReviewText] = useState('')
    const handleReviewTextChange = e => {
        setReviewText(e.target.value)
    }

    const [title, setTitle] = useState('')
    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const data = {
            movieId: movieId,
            rating: rating,
            reviewText: reviewText,
            title: title,
            userUID: props.user.userID
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
            window.location.replace(pageLink)
           
        } catch (err){
            console.log(err.message)
        }
            
    }

      
        return (
            <div>
                <div class="containerNew">
                    <div class="Image">
                        <div className="Title">
                            <h1>{movieData.Title}</h1>
                        </div>
                        <img class ="poster" src={movieData.Poster} alt="titane_poster"/>
                    </div>
                    <div class="Info">
                    <div class="Info-text">
                        <h1>Information</h1>
                            <h3>Title: {movieData.Title}</h3>
                            <h3>Type: {movieData.Type}</h3>
                            <h3>Year of Release: {movieData.Year}</h3>
                            <h3>Average Rating: {showStarRating(averageRating.valueOf())}</h3>
                            <h3>Plot Synopsis: {movieData.Plot}</h3>
                    </div> 
                    </div>
                       {()=>{if(props.user){
                       return(<div className="Write">
                          <div className="Background">
                              <form className="blue-form">
                                  <div className="header">
                                      <h1 className="Titular">Review</h1>
                                  </div>
                                  <h2><label for="review_title">Review Title: </label></h2>
                                  <input className="inputNew" type="text" id="review_title" name="review_title" onChange = {handleTitleChange}></input>
                                  
                                 
        
                                  
                                  
                                  <h2><label for="stars">Rate: </label></h2>
                                  <div className="staar">
                                    <select onChange={handleRatingChange}>
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
                                        </div>





                                  <h2><label for="review">Review: </label></h2>
                                 <div className="textarea">
                                        <textarea onChange = {handleReviewTextChange} className="review" id="review" name="review" rows="10" cols="100"/> 
                                   </div>
                                   <div className="button_local">
                                        <input onClick={handleSubmit} className="button_locale" type="submit" value="Submit"/>
                                  </div>
                              </form> 
                            </div>
                        </div>)}}}
                        <div className="Reviews">
                            <h1>Reviews</h1>
                            <div className="list">
                                 <ReviewSpots reviewData= {reviewsData}/>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }

export default Viewer