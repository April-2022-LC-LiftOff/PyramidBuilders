import React, { Component } from "react";

export default class Welcome extends Component {

    render(){
       if(this.props.user){ 
           return (
           <div className="page">
               <h2>Welcome {this.props.user.username}!</h2>
               <p>We're glad you're here. Let's get started...<br>
            </br><a href='/review'>Write your first review</a>
            <br/><a href='/profile/edit'>Create your profile</a></p>
            </div>
            
        )
        }else {
            return(<div className="page">
            <h2>Hmmmm</h2>
            <p>We're glad you're here, but please <a href='/register'> register</a> before proceeding</p>
        </div>)
        }
    }   
}