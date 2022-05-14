import React, { Component, useState } from "react";
// import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';
// import * as FaIcons from 'react-icons/fa';
// import Form from 'react-bootstrap/Form';
import './pages.css';

import CardList from "../SearchFunctions/CardList";
import SearchBar from "../SearchFunctions/SearchBar";
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
		  <div className="searchContainer">
			<h2 className="title is-2 has-text-centered">
			  Search for a movie
			</h2>
			<SearchBar className="searchInput" onSearch={onSearch}/>
			
			<div className="container">
			<CardList results={state.results}/>
			</div>
		  </div>
		</div>
	  );

	// return (

	// 	<div className="page">

	// 		<div>				
	// 		<Form className="searchContainer">
	// 			<Form.Group>
	// 				<Form.Control className="searchInput" type="text" placeholder="Search reviews"/>
	// 			</Form.Group>
	// 			<Button id="searchIcon" variant="primary" type="submit">
	// 				<FaIcons.FaSearch type="submit"/>
	// 			</Button>
	// 		</Form>	 
	// 		</div>


	// 		<div className="container">

	// 		<Card className="item" style={{ width: '18rem' }}>
	// 			<Card.Title id="title">Title</Card.Title>
	// 			<Card.Body id="body" > Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
	// 			<Button id="button" variant="primary">Go somewhere</Button>
	// 		</Card>
	// 		<Card className="item" style={{ width: '18rem' }}>
	// 			<Card.Title id="title">Title</Card.Title>
	// 			<Card.Body id="body" > Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
	// 			<Button id="button" variant="primary">Go somewhere</Button>
	// 		</Card>
	// 		<Card className="item" style={{ width: '18rem' }}>
	// 			<Card.Title id="title">Title</Card.Title>
	// 			<Card.Body id="body" > Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
	// 			<Button id="button" variant="primary">Go somewhere</Button>
	// 		</Card>
	// 		<Card className="item" style={{ width: '18rem' }}>
	// 			<Card.Title id="title">Title</Card.Title>
	// 			<Card.Body id="body" > Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
	// 			<Button id="button" variant="primary">Go somewhere</Button>
	// 		</Card>
			
		
	// 		</div>
	// 	</div>

	// );
};

export default Home;
