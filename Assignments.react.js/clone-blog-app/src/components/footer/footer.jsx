import React from 'react'
import './footer.css'
import logo_light from '../../assets/logo-light.svg'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-divs">
        <div className="footer-div">
         <img className='footer-logo' src={logo_light} alt="" />
         <p>Learn about Web accessibility, Web <br /> performance, and Database <br /> management.</p>
        </div>
        <div className="footer-div">
         <h3>Quick Links</h3>
         <a href="">Advertise with us</a> <br />
         <a href="">About Us</a> <br />
         <a href="">Contact us</a>
        </div>
        <div className="footer-div">
         <h3>Legal Stuff</h3>
         <a href="">Privacy Notice</a> <br />
         <a href="">Cookie Policy</a> <br />
         <a href="">Turms Of Use</a>
        </div>
        </div>
        <div className="hr">
            <hr />
        </div>
        <div className="copyRight">
        <p>© Copyright 2024 <span><a href="">SimpleBlog</a></span></p>
        </div>
    </div>
  )
}

export default footer