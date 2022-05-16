import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EditButton from "./shared/editButton.js";
import "./pages.css";
import profilePic from "../../assets/tstark.jpeg";

export default function Profile() {
	const usrName = "John Doe";
	const usrPword = "••••••••••";
	const usrEmail = "email@email.com";
  const usrBio = 'Anthony Edward "Tony" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist.'
	return (
		<Container className="profile-container">
			<Row>
				<h1>My Profile</h1>
			</Row>
			<Row className="profile-page">
				{/* pic and bio column */}
				<Col sm={4}>
					<div className="col-bio">
						<div className="profile-pic">
							<img src={profilePic} className="profile-pic" />
						</div>
						
            <Row className="profile-bio">
							<div className="label bio">About Me:</div>
							<div className="edit-button-text">
								{usrBio}
								<EditButton className="edit-button" />
							</div>
						</Row>
						<p className="textStylingRadios">Social Media Apps??</p>
					</div>
				</Col>

				{/* user info column */}
				<Col sm={8}>
					<div className="profile-info">
						<Row className="profile-name">
							<div className="label">Name</div>
							<div className="edit-button-text">
								{usrName}
								<EditButton className="edit-button" />
							</div>
						</Row>
						<Row className="profile-password">
							<div className="label password">Password:</div>
							<div className="edit-button-text">
								{usrPword}
								<EditButton className="edit-button" />
							</div>
              <div>
              <input type="checkbox" onclick="myFunction()"/> Show Password
              </div>
						</Row>

						<Row className="profile-email">
							<div className="label email">Email:</div>
							<div className="edit-button-text">
								{usrEmail}
								<EditButton className="edit-button" />
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
