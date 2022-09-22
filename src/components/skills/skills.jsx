import React from "react";
import "./skills.css"
import {BsFillPatchCheckFill} from "react-icons/bs";
function Skills()
{
    return (
        <section id="skills">
            <h5>Skills I have</h5>
            <h2>Skills</h2>
            <div className="skills">
                <div className="container skills_frontend">
                    <h2>Frontend Development</h2>
                    <div className="coloumns">
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>HTML</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>React</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>BootStrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="container skills_backend">
                    <h2>Backend Development</h2>
                    <div className="coloumns">
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>NodeJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>MySql</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article>
                            <BsFillPatchCheckFill className="icon"/>
                            <div className="article_div">
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;