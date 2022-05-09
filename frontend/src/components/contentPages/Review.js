import React from "react";
import Form from 'react-bootstrap/Form'
import './pages.css';
import Button from 'react-bootstrap/Button';

const Review =() => {

    return (
        
        <div className="page">
            <Form className="reviewStyling">

                <Form.Group className="selectMovie">
                    <Form.Label className="selectLabel">Select a movie to review</Form.Label>
                    <Form.Select placeholder="Select a movie">
                       <option value="1">Movie 1 from API</option>
                       <option value="2">Movie 2 from API</option>
                       <option value="3">Movie 3 from API</option>
                    </Form.Select>
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