import React from 'react'
import './Intro.css'
import { BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            {/* Left Side*/}
            <div className="leftIntro">
                <div className="introName">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hey I Am</span>
                    <span>Praddyota</span>
                    <span>Frontend Developer have good level of
                        experience in web designing & development,
                        producing the Quality work
                    </span>
                </div>

                <a href="https://wa.me/918103740172?text=Hello%20Praddyota%20" target={'blank'}>
                    <button className="introBtn button">Hire me</button>
                </a>

                <div className="socialHandle">
                    <a href="https://www.instagram.com/praddyotahayaran/?next=%2F" target={'blank'}>
                        <BsInstagram />
                    </a>
                    <a href="https://github.com/praddyotahayaran" target={'blank'}>
                        <BsGithub />
                    </a>
                    <a href="https://www.facebook.com/praddyota" target={'blank'}>
                        <BsFacebook />
                    </a>

                </div>

            </div>

            {/* Right Side */}

            <div className="rightIntro">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={glassesimoji} alt="" />

                <motion.div
                    initial={{ right: '-5%' }}
                    whileInView={{ right: '12%' }}
                    transition={transition}

                    style={{ top: '-4%', right: '4rem' }}
                    className="floatingDiv">
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ left: '-5%' }}
                    whileInView={{ left: '2%' }}
                    transition={transition}

                    style={{ top: '23.1rem', left: '.9rem' }}
                    className="floatingDiv">
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>


            </div>
        </div>
    )
}

export default Intro