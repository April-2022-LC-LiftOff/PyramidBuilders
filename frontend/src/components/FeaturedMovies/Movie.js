import React from "react";
import Card from "react-bootstrap/Card";
import "../SearchFunctions/SearchMovies.css";

const Movie = ({Title, Poster}) => (
    
    <div className="grid" className="cards" className="album">

    <Card className="card" style={{ width: '18rem' }} className="box">
        <Card.Img className="image" src={Poster}></Card.Img>
        <Card.Title id="title">{Title}</Card.Title>

    </Card>


</div>
);

export default Movie;
