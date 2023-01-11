import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Services = () => {

    const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* Left Side */}

            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
                <span>Services</span>
                <span style={{color: darkMode? 'white' : ''}}>I design & build user interfaces.
                    Lorem ipsum dolor sit amet  <br />consectetur adipisicing  elit.
                    Consequatur velit dignissimos,  <br />neque libero aspernatur
                    tempora quos omnisadipisci
                </span>
                <a href={Resume} download>
                    <button className="button serviceBtn">Download CV</button>
                </a>

            </div>


            {/* Right Side */}
            <div className="cards">

                {/* 1st Card */}

                <motion.div 
                initial={{left: '30rem'}}
                whileInView={{left: '27rem'}}
                transition={transition}
                
                style={{ left: '27rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Photoshop, Adobe, xd'}
                    />
                </motion.div>

                {/* 2nd Card */}

                <motion.div
                initial={{top: '17rem'}}
                whileInView={{top: '12rem'}}
                transition={transition}
                
                style={{ top: '12rem', left: '7rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"HTML, CSS, JavaScript, React, lorem"}
                    />
                </motion.div>

                {/* 3rd Card */}

                <div 
                
                style={{ top: '21rem', left: '25rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/XI"}
                        detail={"UX applies to anything, UI design considers the look of the product"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services