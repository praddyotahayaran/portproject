import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <div className="navWrapper">
            {/* Left Nav */}
            <div className="leftNav">
                <div className="navLogo">Praddyota</div>
                <Toggle />
            </div>


            {/* Right Nav */}
            <div className="rightNav">
                <div className="navList">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className="button">Contact</button>
                    </Link>
                

            </div>
        </div>
    )
}

export default Navbar