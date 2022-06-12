// ORIGINAL CREATE REVIEW PAGE WITH SEARCH FOR MOVIE TITLE
//---------------------------------------------------------

// import React, { Component, useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Form from 'react-bootstrap/Form'
// import '../contentPages/pages.css';
// import Button from 'react-bootstrap/Button';
// import ReviewSearchBox from "./ReviewSearchBox";
// import InputResults from "./InputResults";
// import StarRating from "./StarRating";



// const Review =() => {

//     const [movies, setMovies] = useState([]);
//     const [selectedMovie, setSelectedMovie] = useState('');
//     const [searchValue, setSearchValue] = useState('');

//     const getMovieRequest = async (searchValue) => {
//         const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=84a99a76`

//         const response = await fetch(url);
//         const responseJson = await response.json();

//         if (responseJson.Search) {
//         setMovies(responseJson.Search);
//         }
//     };

//     useEffect(()=>{
//         getMovieRequest(searchValue);
//     }, [searchValue]);

//     const selectReviewMovie = (movie) => {
//         const newSelectedMovie = [...selectedMovie, movie];
//         setSelectedMovie(newSelectedMovie);
//     }


//     return (
        
//         <div className="page">
//             <Form className="block" >

//                 <Form.Group>
//                     <Form.Label>Select a movie to review: </Form.Label>
//                     <ReviewSearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
//                     <InputResults movies = {movies} handleSelectMovieClick={selectReviewMovie} name="movieId" />
//                 </Form.Group> 

//                 <Form.Group style={{ dislay: 'flex' }}>
//                     <Form.Label>Choose Your Rating</Form.Label>
//                     <StarRating name="rating"/>
//                 </Form.Group>

//                 <Form.Group className="writeReview">
// 					<Form.Control name="reviewText" as="textarea" type="text" placeholder="Write your review here" />
// 				</Form.Group>
                
//                 <Button className="submitReview" type="submit"> Save Review </Button>
            
//             </Form>
//       </div>
//     )
// }

// export default Review;