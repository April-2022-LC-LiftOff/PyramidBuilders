import React from "react";
import Card from "./Card";
import "./SearchMovies.css";
import "../fonts/stylesheet.css";


function CardList( {results}) {
    let data = [];
    if (results.data) {
        data = results.data.Search || [];
    }

    return (
        <div className="result" className="grid" >
            {data.map((item) => (
                <Card className="item" key={item.imdbID} movie={item} />
            ))}
        </div>
    );
}

export default CardList;