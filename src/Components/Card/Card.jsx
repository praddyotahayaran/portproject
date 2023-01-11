import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href="https://www.instagram.com/praddyotahayaran/?next=%2F"><button className="cardBtn">LEARN MORE</button></a>
    </div>
  )
}

export default Card