import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";

const backdropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)',
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderRadius: '50%',
        transform: 'rotate(60deg)',
    }
}

const Login = () => {
    const [isExpanded, setExpanded] = useState(false);

    const playExpandingAnimation = () => {
        setExpanded(true)
        setTimeout(() => {
            setExpanded(false);
        }, 3000);
    }
    return (  
        <div className="App">
        <div className="Box">
            <div className="HeaderContainer">
            <div className="HeaderText">
            Welcome!
                        </div>
                        <div className="small">
                            Please sign-up to continue!
                        </div>
                    </div>    
            <div className="Backdrop">
                <div className="Top">
                </div>
            </div>
            <div className="form-container">
            <input type="email" name="email" className="email" placeholder="Enter Your Email" required/>
            <input type="password" name="psw" className="Input" placeholder="Enter Your Password" required/>
            <div className="MutedText">Forgot Your Password</div>
                <button type="submit" name="btn" className="SubmitButton">Log In</button>
                <div className="MutedText">Don't have an account?</div>
                <div className="BoldLink" href="#" onClick={playExpandingAnimation}>Register Here</div>
            </div>
        </div>
    </div>
    )
}

export default Login