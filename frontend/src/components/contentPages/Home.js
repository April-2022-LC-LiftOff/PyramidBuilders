import React, { Component, useState } from "react";

import "./pages.css";
import "../SearchFunctions/SearchMovies.css";
import "../fonts/stylesheet.css";

import CardList from "../SearchFunctions/CardList";
import SearchBar from "../SearchFunctions/SearchBar";
import FeaturedList from "../FeaturedMovies/FeaturedList";
import OMDBapi from "../api/OMDBapi";

function Home(props) {
	const [state, setState] = useState({
		results: [],
	});

	const onSearch = async (text) => {
		const results = await OMDBapi.get("/", {
			params: { s: text, i: "tt3896198", apiKey: "84a99a76" },
		});
		setState((prevState) => {
			return { ...prevState, results: results };
		});
	};

	return (
		<div className="page">
			<div className="container">
				<div id="searchField">
					Search for a movie
					<SearchBar className="searchInput" onSearch={onSearch} />
				</div>
			</div>

			<div>
				<CardList className="item" results={state.results} />
			</div>

			<div className="container" id="category">
				<div className="bingo">Featured Movies</div>
			</div>

			<div className="container">
				{" "}
				<FeaturedList className="item" />{" "}
			</div>

			<div className="container">
				{" "}
				<FeaturedList className="item" />{" "}
			</div>
		</div>
	);
}

export default Home;
