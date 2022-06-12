import React, { Component } from "react";
import './Viewer.css';
import StarRatingNew from "./StarRatingNew";
import ReviewSpots from "./ReviewSpot";
import { useState } from "react";
import { useEffect } from "react";
import useQuery from "../contentPages/shared/useQuery";

const Viewer = (props) => {

    const [movieData, setMovieData] = useState({});
    const [reviewsData, setReviewsByMovie ] = useState({});
    const query = useQuery();
    const movieId = query.get("movieId")

    useEffect(()=>{
        getMovieData()
    },[])
    useEffect(()=>{
        getMovieReviewsByID()
    }, []);
    
    const ReviewPullApiUrl = "http://localhost:8080/api/review/getAll?movieId=" + movieId
    const movieAPIPull = "http://www.omdbapi.com/?apikey=84a99a76&i=" + movieId

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
      
    const {movie} = props;
      
        return (
            <div>
                <div class="containerNew">
                    <div class="Image">
                        <div className="Title">
                            <h1>movie title</h1>
                        </div>
                        <img class ="poster" src={movieData.Poster} alt="titane_poster"/>
                    </div>
                    <div class="Info">
                    <div class="Info-text">
                        <h1>Information</h1>
                            <h3>Title: {movieData.Title}</h3>
                            <h3>Type: {movieData.Type}</h3>
                            <h3>Year of Release: {movieData.Year}</h3>
                            <h3>Average Rating:</h3>
                            <h3>Plot Synopsis: {movieData.Plot}</h3>
                    </div> 
                    </div>
                        <div className="Write">
                          <div className="Background">
                              <form className="blue-form">
                                  <div className="header">
                                      <h1 className="Titular">Review</h1>
                                  </div>
                                  <h2><label for="review_title">Review Title: </label></h2>
                                  <input className="inputNew" type="text" id="review_title" name="review_title"></input>
                                  <h2><label for="stars">Rate: </label></h2>
                                  <div className="staar">
                                       <StarRatingNew/>
                                  </div>
                                  <h2><label for="review">Review: </label></h2>
                                 <div className="textarea">
                                        <textarea className="review" id="review" name="review" rows="10" cols="100"/> 
                                   </div>
                                   <div className="button_local">
                                        <input className="button_locale" type="submit" value="Submit"/>
                                  </div>
                              </form> 
                            </div>
                        </div>
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