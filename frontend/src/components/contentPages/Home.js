import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import './pages.css';

const Home = () => {
	return (

		
		<div className="page">

			<div>
				<h1>Searchbar</h1>
			</div>


			<div className="container">
		
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button variant="primary">Go somewhere</Button>
			</Card>
	
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button variant="primary">Go somewhere</Button>
			</Card>
			
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button variant="primary">Go somewhere</Button>
			</Card>
			<Card className="item" style={{ width: '18rem' }}>
				<Card.Title id="title">Review of Movie</Card.Title>
				<Card.Body id="body"> Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Body>
				<Button variant="primary">Go somewhere</Button>
			</Card>
			
			</div>
		</div>

	);
};

export default Home;
