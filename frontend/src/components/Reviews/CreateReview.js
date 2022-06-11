// import React, { Component, useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Form from 'react-bootstrap/Form'
// import '../contentPages/pages.css';
// import Button from 'react-bootstrap/Button';
// import ReviewSearchBox from "./ReviewSearchBox";
// import InputResults from "./InputResults";
// import StarRating from "./StarRating";



// const Review =() => {



    // handleSave = async (e) =>{
    //     e.preventDefault();

    //     const data = {
    //         movieId: this.movieId,
    //         rating: this.rating,
    //         reviewText: this.reviewText
    //     }

    //     const url = "http://localhost:8080/api/review/create"

    //     try{ 
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //             'Content-Type': 'application/json',
    //             'Accept' : 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         });
    //         const responseData = await response.json();

    //         let token = responseData.token

    //         localStorage.setItem("token", token);  

    //         window.location.replace('/profile')
           
    //     } catch (err){
    //         console.log(err.message)
    //     }
    // }




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









import React, { Component } from "react";
import StarRating from "./StarRating";
import "./ReviewPageCSS.css";


import { useNavigate } from 'react-router-dom';  
import { Star } from "react-bootstrap-icons";

export default class Review extends Component {
    handleSubmit = async (e) =>{
        e.preventDefault();

        const data = {
            movieId: this.movieId,
            rating: this.rating,
            reviewText: this.reviewText,
            title: this.title,
            userUID: this.userId
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

            // window.location.replace('/profile')
           
        } catch (err){
            console.log(err.message)
        }
            
    }
        
    render() {
        return (  
        <div className="container">
            <div className="header container"> Write a review </div>
                       
            <form className="FormContainer" >
                    <input type="text" name="movieId" onChange = {(e) => this.movieId = e.target.value}placeholder="Input movie ID" required/>
                    <input type="text" name="title" onChange = {(e) => this.title = e.target.value} placeholder="Give your review a title" required/>

                    <div>Your rating: </div>
                    <StarRating type="rating" name="rating" onChange = {(e) => this.rating = e.target.value}  />
                    
                    <input type="text" name="reviewText" onChange = {(e) => this.reviewText = e.target.value}className="Input password" placeholder="Write your review here" required/>
                    
                <button type="submit" className="SubmitButton" onClick={this.handleSubmit}>Save Review</button>
                </form>
        </div>
    )
}
}
