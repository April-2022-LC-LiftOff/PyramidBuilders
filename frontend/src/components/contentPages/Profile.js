import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import EditButton from "./shared/editButton.js";
import { SocialIcon } from "react-social-icons";
import profilePic from "../../assets/profile.png";
import reviewOne from "../../assets/Ironman.jpeg";
import reviewTwo from "../../assets/thor.jpeg";
import reviewThree from "../../assets/moana.jpg";
import reviewFour from "../../assets/bridget.jpg";
import "./pages.css";

export default function Profile() {
	const usrName = "John Doe";
	const usrPword = "••••••••••"; //{usrPword}
	const usrEmail = "email@email.com";
	const usrBio =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	const reviewTitle = "title goes here";
	function stars() {
		const reviewStars = 4;
		if (reviewStars === 0) {
			(numStars = Star), Star, Star, Star, Star;
		} else if (reviewStars === 1) {
			StarFill, Star, Star, Star, Star;
		} else if (reviewStars === 2) {
			StarFill, StarFill, Star, Star, Star;
		} else if (reviewStars === 3) {
			StarFill, StarFill, StarFill, Star, Star;
		} else if (reviewStars === 4) {
			StarFill, StarFill, StarFill, StarFill, Star;
		} else {
			StarFill, StarFill, StarFill, StarFill, StarFill;
		}
	}

	return (
		<Container className="profile-container">
			<Row>
				<h1 className="page-title">My Profile</h1>
			</Row>
			<Row className="profile-page">
				{/* pic and bio column */}
				<Col sm={7}>
					<Card className="bio-card">
						<Row>
							<Col sm={7}>
								<div className="col-bio">
									<div className="profile-pic">
										<img
											src={profilePic}
											className="profile-pic"
										/>
										<EditButton
											disabled
											className="edit-button"
										/>
									</div>

									<Row className="profile-bio">
										<div className="label bio">
											About Me:
										</div>
										<div className="edit-button-text">
											{usrBio}
											<EditButton
												disabled
												className="edit-button"
											/>
										</div>
									</Row>
								</div>
							</Col>

							{/* user info column */}
							<Col sm={5}>
								<div className="col-profile-info">
									<Row className="profile-name">
										<div className="label">Name</div>
										<div className="edit-button-text">
											{usrName}
											<EditButton
												disabled
												className="edit-button"
											/>
										</div>
									</Row>
									<Row className="profile-password">
										<div className="label password">
											Password:
										</div>
										<div className="edit-button-text">
											{usrPword}
											<EditButton
												disabled
												className="edit-button"
											/>
										</div>
										<div>
											<input
												type="checkbox"
												onclick="myFunction()"
											/>{" "}
											Show Password
										</div>
									</Row>

									<Row className="profile-email">
										<div className="label">Email:</div>
										<div className="edit-button-text">
											{usrEmail}
											<EditButton className="edit-button" />
										</div>
									</Row>
								</div>
							</Col>
						</Row>
					</Card>
				</Col>
				<Col sm={5}>
					<div className="col-review-cards">
						<Card className="review-card">
							<Card.Img
								variant="top"
								src={reviewOne}
								style={{ size: "sm" }}
							/>
							<Card.Body>
								<Card.Title>{stars}Iron Man</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
								<Button disabled variant="primary">
									Full Review
								</Button>
							</Card.Body>
						</Card>
						<Card className="review-card">
							<Card.Img
								variant="top"
								src={reviewTwo}
								style={{ size: "sm" }}
							/>
							<Card.Body>
								<Card.Title>Thor: Ragnarok</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
								<Button variant="primary">Full Review</Button>
							</Card.Body>
						</Card>
						<Card className="review-card">
							<Card.Img
								variant="top"
								src={reviewThree}
								style={{ size: "sm" }}
							/>
							<Card.Body>
								<Card.Title>Moana</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
								<Button variant="primary">Full Review</Button>
							</Card.Body>
						</Card>
						<Card className="review-card">
							<Card.Img
								variant="top"
								src={reviewFour}
								style={{ size: "sm" }}
							/>
							<Card.Body>
								<Card.Title>Bridget Jones Diary</Card.Title>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
								<Button variant="primary">Full Review</Button>
							</Card.Body>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
