import React from "react";
import "./project.css"
import web from "../../assests/webRtc.jpg";
import cgw from "../../assests/careerGuide.jpg"
import oap from "../../assests/online admission.jpg"
import career from "../../assests/careerGuide.jpg";
import onlineAdmission from "../../assests/online admission.jpg"
function Project()
{
    return (
        <section id="projects" className="project">
            <h5>What i've done</h5>
            <h2>Projects</h2>
            <div className="projects_list">
                <div>
                    <img src={web}alt="img" />
                    <br></br>
                    <h2>Video Chat Application</h2>
                    <p className="para">A video chatting app developed by using WebRtc.Signaling Process done with the
                    help of AgoraRTM.</p>
                    <p>The user can join a channel and can have a one to one chat with other User.</p>
                    <a class="btn " target="_blank" href="https://github.com/Deepak2428/Bonjour-Chat-app">Git Hub</a>
                </div>

                <div>
                    <img src={cgw} alt="img" />
                    <h2>Career Guidance Website</h2>
                    <p className="para">A website for students to know about different career options they can opt after
                    High school or Inter School</p>
                    <p>The students has to register/Sign in to proceed further</p>
                    <a class="btn" target="_blank" href="https://github.com/Deepak2428/Career-Guidance-Website">Git Hub</a>
                </div>

                <div>
                    <img src={oap} alt="img" />
                    <h2>Online Admission Portal</h2>
                    <p className="para">A online Portal for students to apply for admission in a college.Admin section 
                    for University Employees</p>
                    <p>The students have to register and later upload documents for the Process.</p>
                    <a class="btn " target="_blank" href="https://github.com/Deepak2428/Online-Admission-Portal">Git Hub</a>
                </div>

            </div>
        </section>
    )
}

export default Project;