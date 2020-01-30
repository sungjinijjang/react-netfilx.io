import React, { Component } from 'react';
import styled from "styled-components";
import logo from "../svg/logo.svg";

class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <img src={logo} alt="logo" className="logo" />
                </div>
            </div>
        );
    }
}

export default Login;

// Logo
const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0;
`;