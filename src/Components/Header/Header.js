import React, { Component } from 'react';
import Logo from "./Logo.jpg"
import "./Header.css"

const Header = () => (
    <div className="row">
        <div className="col-12-md mad-men-header">
            <img id="logo" src={Logo}  alt="Mad Men Logo" />
        </div>
    </div>
);

export default Header;