import React from 'react';
import ReviewSearchBox from "./ReviewSearchBox";
import SelectMovie from "./SelectMovie";

const InputResults = (props) => {

    return (

        <button onClick={() => props.handleSelectMovieClick}>
            {props.movies.map((movie, index)=> (
                
            <div>
                <p> {movie.Title} </p>
            </div>

        ))}
        </button>
    );
};

export default InputResults;