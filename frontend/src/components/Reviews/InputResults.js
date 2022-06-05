import React from 'react';

const InputResults = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> (
            <div>
                <p>{movie.Title}</p>
            </div>

        ))}
        </>
    );
};

export default InputResults;