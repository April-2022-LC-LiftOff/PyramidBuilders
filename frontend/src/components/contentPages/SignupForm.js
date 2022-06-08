import React, { Component } from "react";
import "./SignupForm.css";
import Form from "bootstrap";
import { Link } from "react-router-dom";

export default class SignupForm extends Component {
    handleSubmit = async (e) =>{
        e.preventDefault();


        const data = {
            username: this.username,
            email: this.email,
            password: this.psw,
            verifyPassword: this.psw2
        }

        const url = "http://localhost:8080/api/user/register"

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

            console.log(responseData);

            let token = responseData.token

            localStorage.setItem("token", token);  

            window.location.replace('/welcome')
           
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
            Welcome! <br />
                        </div>
                        <div className="small">
                            Please sign up to continue!
                        </div>
                    </div>    
            <div className="Backdrop">
                <div className="Top">
                </div>
            </div>
            <form className="Form FormContainer" onSubmit={this.handleSubmit}>
                    <input type="email" name="email" onChange = {(e) => this.email = e.target.value}className="Input email" placeholder="Please enter your email" required/>
                    <input type="text" name="username" 
                    onChange = {(e) => this.username = e.target.value} className="Input username" placeholder="Please enter your username" required/>
                    <input type="password" name="psw" onChange = {(e) => this.psw = e.target.value}className="Input password" placeholder="Please enter your password" required/>
                    <input type="password" name="psw2" onChange = {(e) => this.psw2 = e.target.value}className="Input" placeholder="Please confirm your password" required/>
                    
            <div className="MutedText">Forgot Your Password</div>
                <button type="submit" name="btn" className="SubmitButton">Sign Up</button>
                <Link to="/Login" className="MutedText">Already have an account? </Link>
                </form>
        </div>
    </div>
    )
}
}

