import React from "react";
import "./about.css"
import me from "../../assests/IMG_1318.jpeg";
import {MdComputer} from "react-icons/md";
import {FaJava} from "react-icons/fa";
function About()
{
    return (
    <section id="about" className="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="gridContainer">
            <div></div>
            <div className="about_image">
                <div>
                    <img src={me} alt="img" className="about_me" />
                </div>
            </div>

            <div className="container about_text">
                
                <div className="gridContainer2">
                    <div>
                        <MdComputer />
                    </div>
                    <div>
                        <FaJava />
                    </div>
                </div>
               
                <div className="gridContainer3">
                    <div className="webDev">
                        <h5>Web Developer</h5>
                    </div>
                    <div className="problemSolving">
                        <h5>Problem Solving with Java</h5>
                    </div>
                </div>

                <br></br>
                
                <article>
                I am a student pursuing Computer Science engineering from Graphic Era University. Strong creative
                and analytical skills. Always ready to learn new things. Team player
                with an eye for detail.
                </article>
                <br></br>
                <a href="#" className="btn primary">Let's talk</a>
            </div>
            
        </div>
    </section>)
}

export default About;