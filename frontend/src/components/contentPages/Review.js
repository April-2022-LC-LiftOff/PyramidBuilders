import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import './pages.css';
import Button from 'react-bootstrap/Button';

import axios from 'axios';
import OMDBapi from "../api/OMDBapi";

const Review =() => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
        const url = "http://www.omdbapi.com/?s=avengers&apikey=84a99a76"

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setMovies(responseJson.Search);

    };

    useEffect(()=>{
        getMovieRequest();
    }, []);


    return (
        
        <div className="page">
            <Form className="reviewStyling">

                <Form.Group className="selectMovie">
                    <Form.Label className="selectLabel">Select a movie to review: </Form.Label>
                    <Form.Control type="text" placeholder="Start typing the movie name..."/>

                </Form.Group> 

                <Form.Group className="reviewButtons" style={{ display: 'flex' }}>
                    <Form.Label >Choose Your Rating</Form.Label>
                    <Form.Check  label="1" type="radio"></Form.Check>
                    <Form.Check  label="2" type="radio"></Form.Check>
                    <Form.Check  label="3" type="radio"></Form.Check>
                    <Form.Check  label="4" type="radio"></Form.Check>
                    <Form.Check  label="5" type="radio"></Form.Check>
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