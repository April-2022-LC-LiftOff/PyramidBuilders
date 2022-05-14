import React from "react";
// import Card from "react-bootstrap/Card";

export default function Cards(props) {
    const {movie} = props;

    return (
        <div className="resultCard">
            <figure className="image is-48x48">
                <img src={movie.Poster} alt={movie.Title} />
            </figure>
            {/* <Card className="item" style={{ width: '18rem' }}>
                <Card.img>{movie.Poster}</Card.img>
                <Card.Title id="title">{movie.Title}</Card.Title>
                <Card.Body id="body" >Year: {movie.Year}</Card.Body>
            </Card> */}
        </div>
    );
}



