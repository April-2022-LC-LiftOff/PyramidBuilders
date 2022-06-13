import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Modal,
	ModalHeader,
} from "react-bootstrap";
import profilePic from "../../assets/profile.png";

import "./pages.css";
import { GetProfileData } from "../api/profileService.js";

export default function Profile(props) {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userBio, setUserBio] = useState("");
	const [userFriendsList, setUserFriendsList] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const userId = props.user.userID;

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	// const editModal = () => {};

	useEffect(() => {
		if (userId && userId !== null) {
			GetProfileData({ userId }).then((res) => {
				const usrName = res.data.username;
				const usrPword = "••••••••••"; //{usrPword}
				const usrEmail = res.data.email;
				const usrBio = res.data.bioText;
				const usrFrnds = res.data.friendsList;
				setUserBio(usrBio);
				setUserEmail(usrEmail);
				setUserName(usrName);
				setUserFriendsList(usrFrnds);
			});
		}
	}, []);

	return (
		<Container className="profile-container">
			<Row>
				<h1 className="page-title">My Profile</h1>
			</Row>
			<Row className="profile-page">
				{/* pic and bio column */}
				<Col lg={8}>
					<Card className="bio-card">
						<div className="profile-pic">
							<img src={profilePic} className="profile-pic" />
						</div>

						<Row className="profile-bio">
							<div className="label bio">
								<h4>About Me:</h4>
							</div>
							<div className="profile-input">{userBio}</div>
						</Row>

						{/* user info column */}
						<Row>
							<div className="label">
								<h4>Name</h4>
							</div>

							<div className="profile-input">{userName}</div>
						</Row>
						{/* <Row className="profile-password">
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
									</Row> */}

						<Row className="profile-email">
							<div className="label">
								<h4>Email:</h4>
							</div>
							<div className="profile-input">{userEmail}</div>
						</Row>
						<div className="edit-button">
							<Button
								variant="outline-primary"
								onClick={handleShow}
							>
								Edit Profile
							</Button>
							<Modal show={showModal} onHide={handleClose}>
								<Modal.Header closeButton>
									<Modal.Title>Edit Profile</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									Edit Profile Coming Soon!
								</Modal.Body>
								<Modal.Footer>
									<Button
										variant="secondary"
										onClick={handleClose}
									>
										Close
									</Button>
									<Button
										variant="primary"
										onClick={handleClose}
										disabled
									>
										Save Changes
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
					</Card>
				</Col>
				<Col lg={4}>
					<div className="col-review-cards">
						<h4>My Reviews</h4>
						<div className="review-list">
							{props.reviewData ? (
								<ReviewSpot />
							) : (
								<a href="/review">
									<h5>Write your first review</h5>
								</a>
							)}
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
