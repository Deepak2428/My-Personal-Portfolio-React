import React, { useState } from "react";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BsBook} from "react-icons/bs";
import {RiServiceLine} from "react-icons/ri";
import {AiOutlineContacts} from "react-icons/ai";

import "./navbar.css";
function Navbar()
{

    const[activeNav,setActive]=useState("#");
    function handleHome()
    {
        setActive("#");
    }
    function handleAbout()
    {
        setActive("about");
    }
    function handleSkills()
    {
        setActive("skills");
    }
    function handleProjects()
    {
        setActive("projects");
    }
    function handleContacts()
    {
        setActive("contact");
    }
    return( 
    <nav>
    <a href="#" onClick={handleHome} className={ activeNav==="#"?"active":""}><AiOutlineHome /></a>
    <a href="#about" onClick={handleAbout} className={ activeNav==="about"?"active":""} ><AiOutlineUser /></a>
    <a href="#skills" onClick={handleSkills} className={ activeNav==="skills"?"active":""}><BsBook /></a>
    <a href="#projects" onClick={handleProjects} className={ activeNav==="projects"?"active":""}><RiServiceLine /></a>
    <a href="#=contact" onClick={handleContacts} className={ activeNav==="contact"?"active":""}><AiOutlineContacts /></a>
    </nav>
    )
}

export default Navbar;