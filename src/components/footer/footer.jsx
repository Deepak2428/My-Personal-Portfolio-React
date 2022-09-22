import React from "react";
import "./footer.css";
import FloatSocial from "./FloatSocial";
import {AiFillInstagram} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
function Footer()
{
    var d= new Date();
    return (
        <section id="footer" className="footer">
        <br></br><br></br>
        <h2>Deepak Godiyal</h2>
        <FloatSocial />
        <div className="footer_icons">
            <a href="https://www.instagram.com/shubham_24_28/" target="_blank"><AiFillInstagram className="footer_icon"/></a>
            <a href="https://github.com/Deepak2428" target="_blank"><BsGithub className="footer_icon"/></a>
            <a href="https://www.facebook.com/shubham.godiyal.3/" target="_blank"><FaFacebookF className="footer_icon"/></a>
        </div>
        <small>Copyright ©  {d.getFullYear()}</small>
        <br></br><br></br><br></br><br></br>
        </section>
    )
}

export default Footer;