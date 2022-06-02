import React from "react";
import Card from "react-bootstrap/Card";
// import { Col, Row } from "react-bootstrap";
import "./SearchMovies.css";

export default function Cards(props) {
    const {movie} = props;

    return (
        <div className="grid cards album">

                        <Card className="card box" style={{ width: '18rem' }} >
                            <Card.Img className="image" src={movie.Poster}></Card.Img>
                            <Card.Title id="title">{movie.Title}</Card.Title>
                            <Card.Body id="body" >Year: {movie.Year}</Card.Body>
                        </Card>


        </div>
    );
}



