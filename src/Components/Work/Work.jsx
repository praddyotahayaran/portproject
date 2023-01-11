import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


const Work = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="work" id=''>
            {/* Left Side */}

            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Works for All These</span>
                <span>Brands Clients</span>
                <span style={{ color: darkMode ? 'white' : '' }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />  Praesentium corrupti iste voluptatibus ut beatae atque laborum
                    <br /> vitae ex officiis libero magni optio hic molestiae laboriosam</span>

                <button className="button serviceBtn">Hire me</button>
            </div>

            {/* Right Side */}

            <div className="workRight">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    // viewport={{ margin: '-40px' }}
                    transition={{ duration: 2, type: 'spring' }}

                    className="workmainCircle"
                >
                    <div className="workSecCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="workSecCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="workSecCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="workSecCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="workSecCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>

                {/* Background Circle */}

                <div className="workBackCircle blueCircle"></div>
                <div className="workBackCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work