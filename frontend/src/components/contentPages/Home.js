import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import * as FaIcons from 'react-icons/fa';
import Form from 'react-bootstrap/Form'

import './pages.css';

const Home = () => {
	return (

		
		<div className="page">

			<div>				
			<Form className="searchContainer">
				<Form.Group>
					<Form.Control className="searchInput" type="text" placeholder="Search reviews" />
				</Form.Group>
				<Button id="searchIcon" variant="primary" type="submit">
					<FaIcons.FaSearch />
				</Button>
			</Form>	 
			</div>


			<div className="container">
		
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button id="button" variant="primary">Go somewhere</Button>
			</Card>
	
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button id="button" variant="primary">Go somewhere</Button>
			</Card>
			
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button id="button" variant="primary">Go somewhere</Button>
			</Card>
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button id="button" variant="primary">Go somewhere</Button>
			</Card>
			
			</div>
		</div>

	);
};

export default Home;
