import React from 'react';
import ReviewSearchBox from "./ReviewSearchBox";
import InputResults from "./InputResults";
     
const SelectMovie = () => {
        const [movies, setMovies] = useState([]);
        const [selectedMovie, setSelectedMovie] = useState('');
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
    
        const selectReviewMovie = (movie) => {
            const newSelectedMovie = [...selectedMovie, movie];
            setSelectedMovie(newSelectedMovie);
        }

        return (

            <button onClick={() => props.handleSelectMovieClick}>
                {props.movies.map((movie, index)=> (
                    
                <div>
                    <p> {movie.Title} </p>
                </div>
    
            ))}
            </button>
        );
       
    }

export default SelectMovie;