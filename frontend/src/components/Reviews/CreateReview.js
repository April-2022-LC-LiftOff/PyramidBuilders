import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import '../contentPages/pages.css';
import Button from 'react-bootstrap/Button';
import ReviewSearchBox from "./ReviewSearchBox";
import InputResults from "./InputResults";
import StarRating from "./StarRating";



const Review =() => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=84a99a76`

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
        setMovies(responseJson.Search);
        }
    };

    useEffect(()=>{
        getMovieRequest(searchValue);
    }, [searchValue]);


    return (
        
        <div className="page">
            <Form className="reviewStyling">

                <Form.Group className="selectMovie">
                    <Form.Label className="selectLabel">Select a movie to review: </Form.Label>
                    <ReviewSearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <InputResults movies = {movies}/>
                </Form.Group> 

                <Form.Group className="selectMovie" style={{ dislay: 'flex' }}>
                    <Form.Label className="selectLabel">Choose Your Rating</Form.Label>
                    <StarRating className="starRating"  />
                </Form.Group>

                <Form.Group className="writeReview">
					<Form.Control as="textarea" type="text" placeholder="Write your review here" />
				</Form.Group>
                
                <Button className="submitReview" type="submit"> Save Review </Button>
            
            </Form>
      </div>
    )
}

export default Review;