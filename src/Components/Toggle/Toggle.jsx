import React from 'react'
import './Toggle.css'
import { FiMoon, FiSun } from 'react-icons/fi'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }
    return (
        <div className="toggle">
            <FiMoon />
            <FiSun />
            <div className="toggleBtn"
            onClick={handleClick}
                style={darkMode ? { left: '2px' } : { right: '2px' }}
            >

            </div>
        </div>
    )
}

export default Toggle