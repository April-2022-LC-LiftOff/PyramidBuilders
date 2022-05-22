import React, { Component, useState } from "react";

import './pages.css';
import '../SearchFunctions/SearchMovies.css';

import CardList from "../SearchFunctions/CardList";
import SearchBar from "../SearchFunctions/SearchBar";
import FeaturedList from "../FeaturedMovies/FeaturedList";
import OMDBapi from "../api/OMDBapi";



function Home(props) {

	const [state, setState] = useState({
		results: []
	  });
	
	  const onSearch = async (text) => {
		const results = await OMDBapi.get("/", {
		  params: {s: text, i: "tt3896198", apiKey: "84a99a76"}
		} )
		setState(prevState => {
		  return {...prevState, results:results}
		})
	  }
	
	  return (
		<div className="page">
		  <div className="container">
			  
			<h3>Search for a movie</h3>
			<SearchBar className="searchInput" onSearch={onSearch}/>
			
			<div>
			<CardList className="item" results={state.results}/>
			</div>

			<div id="category">Featured Movies</div>
			
			<div className="container">
			<FeaturedList className="item" />
			</div> 

		  </div>
		</div>
	  );


};

export default Home;
