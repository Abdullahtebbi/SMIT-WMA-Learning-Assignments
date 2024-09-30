import React from 'react'
import "./navbar.css"
import logo_light from '../../assets/logo-light.svg'
import sun_icon from '../../assets/sun-icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo_light} alt="" />
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Contact</li>
        </ul>
        <div className='dark-mood-btn'>
          <div className='white-circle'></div>
          <img src={sun_icon} alt="" />
        </div>
       
    </div>
  )
}

export default Navbar