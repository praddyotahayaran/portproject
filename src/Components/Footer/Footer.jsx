import React from 'react'
import './Footer.css'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerName">
        <span>Praddyota Hayaran</span>
        <span>All Rights reserved</span>
      </div>

      <div className="social">
        <span>SOCIAL MEDIA</span>
        <div className="media">
          <a href="https://www.instagram.com/praddyotahayaran/?next=%2F" target={'blank'}>
            <AiOutlineInstagram />
          </a>
          <a href="https://www.linkedin.com/in/praddyota-hayaran-245543201/" target={'blank'}>
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/praddyotahayaran" target={'blank'}>
            <AiOutlineGithub />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Footer