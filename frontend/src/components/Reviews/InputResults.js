import React from 'react';

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