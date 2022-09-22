import React from "react";
import Header from "./header/header.jsx"
import About from "./about/about.jsx"
import Skills from "./skills/skills.jsx"
import Project from "./projects/project.jsx"
import Contact from "./contact/contact.jsx"
import Footer from "./footer/footer.jsx"
import Navbar from "./navbar/navbar.jsx"
function App()
{
    return (<div>
            <Header />
            <Navbar />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;