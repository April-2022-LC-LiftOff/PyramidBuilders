import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";


export default function Cards(props) {
    const {movie} = props;

    return (
        <div className="cards" className="album">

            <Row>
                {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    {/* <figure> */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={movie.Poster}></Card.Img>
                            <Card.Title id="title">{movie.Title}</Card.Title>
                            <Card.Body id="body" >Year: {movie.Year}</Card.Body>
                        
                        </Card>
                    {/* </figure> */}
                </Col>
                ))}
            </Row>


        </div>
    );
}



