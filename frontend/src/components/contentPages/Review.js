import React from "react";
import Form from 'react-bootstrap/Form'
import './pages.css';
import Button from 'react-bootstrap/Button';

const Review =() => {

    return (
        
        <div className="page">
            <Form>

                <Form.Group>
                    <Form.Label>Select movie to review</Form.Label>
                    <Form.Select placeholder="Select a movie">
                       <option value="1">Movie 1 from API</option>
                       <option value="2">Movie 2 from API</option>
                       <option value="3">Movie 3 from API</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
					<Form.Control as="textarea" type="text" placeholder="Write your review here" />
				</Form.Group>
                
                <Button type="submit"> Save Review </Button>
            
            </Form>
      </div>
    )
}

export default Review;