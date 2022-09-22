import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Social()
{
    return(<div className="social">
        <a href="https://github.com/Deepak2428"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/deepak-godiyal-15b78b1b4/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/shubham_24_28/"><FaInstagramSquare /></a>
        <div className="line"></div>
        </div>
    )
}
export default Social