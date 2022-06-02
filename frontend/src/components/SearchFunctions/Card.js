import React from "react";
import Card from "react-bootstrap/Card";
import "./SearchMovies.css";

export default function Cards(props) {
    const {movie} = props;

    return (
        <div className="grid" className="cards" className="album">

                        <Card className="card" style={{ width: '18rem' }} className="box">
                            <Card.Img className="image" src={movie.Poster}></Card.Img>
                            <Card.Title id="title">{movie.Title}</Card.Title>
                        </Card>


        </div>
    );
}



