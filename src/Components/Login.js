import React from 'react';
import { loginUrl } from '../spotify';
import "./Login.css";



function Login() {
    return (
        <div className="login">
            <img 
            src="http://assets.stickpng.com/images/59b5bb466dbe923c39853e00.png"
            alt=""
            />
            <a href= {loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
