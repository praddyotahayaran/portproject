import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pev2vdc', 'template_0epz4fr', form.current, 'EENYRq2ghPW4jvMIo')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact" id='Contact'>
      {/* Heading */}

      <div className="contactHeading">
        <span>Get in Touch</span>
        <span>Contact me</span>
      </div>

      <div className="contactForm">
        <form
          ref={form} onSubmit={sendEmail}>

          <input type="text" name='user_name' className='user' placeholder='Name' />
          <input type="email" name="" className='user' placeholder='Email' />
          <textarea name="message" id="" className='user' cols="30" rows="10" placeholder='Message' />

          <input type="submit" value="Send" className='button' />
          <span>{done && "Thanks for contacting me"}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact