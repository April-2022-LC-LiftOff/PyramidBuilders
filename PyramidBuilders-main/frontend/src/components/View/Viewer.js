import React, { Component } from "react";
import './Viewer.css';

const Viewer = (props) => {
    
    const {movie} = props;

        return (
            <div>
                <div class="containerNew">
                    <div class="Image">
                        <div className="Title">
                            <h1>Title</h1>
                        </div>
                        <img class ="poster" src="." alt="titane_poster"/>
                    </div>
                    <div class="Info">
                    <div class="Info-text">
                        <h1>Information</h1>
                            <h3>ID: </h3>
                            <h3>Title:</h3>
                            <h3>Type:</h3>
                            <h3>Year of Release:</h3>
                            <h3>Average Rating:</h3>
                            <h3>Plot Synopsis: A woman with a titanium plate fitted in her head and murderous intent on her mind embarks on a bizarre journey of identity and unconditional love when she's forced to go on the run.</h3>
                    </div> 
                    </div>
                        <div className="Write">
                          <div className="Background">
                              <form>
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
                                <ReviewSpots/>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }

export default Viewer