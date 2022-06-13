import React, {useState, useEffect, useForm} from 'react';

const GetMovie = (props) => {
    const [movies, setMovies] = useState([]);
    // const [movidID, setMovieID] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=84a99a76`

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
        setMovies(responseJson.Search);
        }
    };

    useEffect(()=>{
        getMovieRequest(searchValue);
    }, [searchValue]);

    

    
    return (
        <div>
            <div>
                <input
                className="form-control"
                value={props.value}
                onChange={(e)=> setSearchValue(e.target.value)}
                placeholder="Type movie name..."
                ></input>
            </div>

        <select name="movie"> {movies.map((movie, index)=> (
            
                <option key={movie.imdbID} value={movie.imdbID}> {movie.Title} </option>
    
            ))}
            
        </select>
</div>
    ) 
}

export default GetMovie;