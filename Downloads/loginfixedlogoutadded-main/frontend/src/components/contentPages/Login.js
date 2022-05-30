import React, { Component } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import background from "../images/background.png";

export default class Login extends Component {

     handleSubmit = async (e) =>{
        e.preventDefault();


        const data = {
            email: this.email,
            password: this.password
        }

        const url = "http://localhost:8080/api/user/login"

        try{ 
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();

            let token = responseData.token

            localStorage.setItem("token", token);  

            window.location.replace('/')
           
        } catch (err){
            console.log(err.message)
        }
        
        
    }

    
    render() {
    return (
        <div className="App">
            <div className="Box">
                <div className="HeaderContainer">
                    <div className="HeaderText">
                        Welcome!
                    </div>
                    <div className="small">
                        Please sign-in to continue!
                    </div>
                </div>    
            <div className="Backdrop">
                <div className="Top">
                </div>
            </div>
            <form onSubmit={this.handleSubmit} className="Form FormClass">

                <input type="email" 
                    name="email" 
                    className="Input email" 
                    placeholder="Enter Your Email" 
                    onChange = {(e) => this.email = e.target.value}
                    required/>
                
                <input type="password" 
                    name="password" 
                    className="Input password" placeholder="Enter Your Password"
                    onChange = {(e) => this.password = e.target.value}
                    required/>
                
                <div className="MutedText">Forgot Your Password?</div>
                
                <button type="submit" name="btn" className="SubmitButton">Log In</button>

            </form>
            <Link to="/register" className="MutedText">Don't have an account? </Link>
            </div>
        </div>
    );
    }
}

