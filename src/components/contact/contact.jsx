import React, { useState } from "react";
import {AiOutlineMail} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from "emailjs-com";
import "./contact.css";
function Contact()
{
    const [status,setStatus]= useState("");
    function handleChange()
    {
        setStatus("Hey ! Thanks for Contacting Me.Will be in touch Soon.");
    }
    const form1 = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hvceqzn', 'template_bfyfli4', form1.current, '54NxmCls_J5p_4sEA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



    return (
        <section id="contact" className="contact">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>

            <div className="contact_options">
                <div>
                    <div className="email">
                        <AiOutlineMail className="contact_icon"/>
                        <h4>Email</h4>
                        <small className="text-light">Shubham.godiyal2001@gmail.com</small>
                        <a href="mailto:shubham.godiyal2001@gmail.com" target="_blank">Send a Message</a>
                    </div>
                    <div className="Insta">
                        <BsInstagram  className="contact_icon"/>
                        <h4>Instagram</h4>
                        <small className="text-light">shubham_24_28</small>
                        <a href="https://www.instagram.com/direct/inbox/" target="_blank">Send a Message</a>
                    </div>
                    <div className="whatsApp">
                        <BsWhatsapp className="contact_icon"/>
                        <h4>Whats App</h4>
                        <small className="text-light">+91 8859770347</small>
                        <a href="https://api.whatsapp.com/send?phone=918859770347" target="_blank">Send a Message</a>
                    </div>
                </div>
                <div className="align_left">
                    <form ref={form1} onSubmit={sendEmail}>
                        <input name="name" placeholder="Enter your full name" required/>
                        <input name="email" placeholder="Enter your email" required/>
                        <textarea name="message" placeholder="Enter your message" rows="4" required/>
                        <button className="btn primary" onClick={handleChange}type="submit">Submit</button>
                    </form>
                    <small>{status}</small>
                </div>
                
            </div>
        </section>
    )
}

export default Contact;