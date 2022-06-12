import React from "react";
import Form from 'react-bootstrap/Form'
import './pages.css';
import {Image, Button, Container, Column, Row} from 'react-bootstrap/Button';
import {ReviewSpot} from './ReviewSpot';


 export default class FormReview extends Component {
    render() {
       const {movie} = props;  
        return (
            <>
            <div className = "header">
                <div className="title">{movie.title}</div>
                <Image className="Image">{movie.poster}</Image>
            </div>
            <div className = "Write">
                
            </div>
            <li>
                {ReviewSpot}
            </li>

            </>
        )
}
}
