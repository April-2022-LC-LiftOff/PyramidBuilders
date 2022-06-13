import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./components/contentPages/Home";
import Profile from "./components/contentPages/Profile";

import CreateReview from "./components/Reviews/CreateReview";

import Login from "./components/contentPages/Login";
import SignupForm from "./components/contentPages/SignupForm";
import "./App.css";
import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
import { Fragment } from "react";
import ScrollButton from "./components/Footer/ScrollButton";
import { useHistory, useNavigate } from "react-router-dom";
import axios from "axios";
import Welcome from "./components/contentPages/Welcome";
import Viewer from "./components/View/Viewer";

class App extends Component {
	state = {};
	componentDidMount() {
		const auth = {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		};

		axios.get("http://localhost:8080/api/user/user", auth).then((user) => {
			this.setState({
				user: user.data,
				auth: auth,
			});
		});
	}

	render() {
		return (
			<div className="app">
				<Router>
					<Topbar user={this.state.user} />
					<div className="app-container">
						<Sidebar user={this.state.user} />
						<div className="page-container">
							<Switch>
								<Route
									path="/"
									exact
									component={() => (
										<Home user={this.state.user} />
									)}
								/>
								<Route
									path="/profile"
									component={() => (
										<Profile user={this.state.user} />
									)}
								/>
								<Route
									path="/review"
									component={() => (
										<CreateReview user={this.state.user} />
									)}
								/>
								<Route path="/login" component={Login} />
								<Route
									path="/register"
									exact
									component={SignupForm}
								/>
								<Route
									path="/welcome"
									exact
									component={() => (
										<Welcome user={this.state.user} />
									)}
								/>
								<Route path="/film" exact component={Viewer} />
							</Switch>
						</div>
					</div>
				</Router>
				<Footer />
				<ScrollButton />
			</div>
		);
	}
}

export default App;
