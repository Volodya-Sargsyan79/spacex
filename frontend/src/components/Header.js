import React from "react";
import NavBar from "../NavBar/Nav";
import '../style/Header.scss'

export default function Header() {
    return (
        <div className="header_container">
            <img src={require('../images/logo.png')}/>
            <NavBar />
        </div>
    )
}