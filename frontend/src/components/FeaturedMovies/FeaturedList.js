import React, {useEffect, useState} from "react";
import "../SearchFunctions/SearchMovies.css";
import Movie from './Movie';

function FeaturedList() {

    const featuredApi = "http://www.omdbapi.com/?apikey=84a99a76&type=movie&s=pyramid";

    const [movies, setMovies] = useState([]);

    useEffect( () => {
        fetch(featuredApi)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.Search);
        });

    }, [])

    return (
        <div className="grid">
            {movies.map(movie => (
                <Movie className="item" key={movie.imdbID} {...movie}/>
            ))}
        </div>
    );
    
}

export default FeaturedList;