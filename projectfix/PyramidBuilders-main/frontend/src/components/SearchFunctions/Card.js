import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./SearchMovies.css";
import "../fonts/stylesheet.css";

export default function Cards(props) {
    const {movie} = props;
    const moviePath = `/film/?movieId=${movie.imdbID}`;
    return (
        <div className="grid cards album">

                        <Card className="card box" style={{ width: '18rem' }} >
                            <Card.Img className="image" src={movie.Poster}></Card.Img>
                            <Card.Title id="title">{movie.Title}</Card.Title>
                            <Card.Link href={moviePath} className="little">
                               More Information
                            </Card.Link>
                        </Card>


        </div>
    );
}



