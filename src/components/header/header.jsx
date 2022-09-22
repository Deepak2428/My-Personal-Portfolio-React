import React from "react";
import Buttons from "./buttons.jsx"
import "./header.css"
import img from "../../assests/Me5 (2).png"
import Social from "./social.jsx";
function Header()
{
    return (
    <header>
        <div className="container header_container">
            <h5>Hello i am</h5>
            <h1>Deepak Godiyal</h1>
            <h3>A Full Stack Developer</h3>
            <Buttons />
            <img className="me" src={img} alt="img"/>    
            <Social />
            <div className="scroll__down">
                <a href="#footer">Scroll Down</a>
            </div>
        </div>
    </header>)
}

export default Header;