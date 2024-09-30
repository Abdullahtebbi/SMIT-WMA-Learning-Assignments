import React from 'react'
import './hero.css'
import AnchorLink from '../../../../node_modules/react-anchor-link-smooth-scroll/lib/anchor-link';
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt="" />
    <h1><span>I'm Abdullah Tayyab,</span> frontend developer based in pakistan.</h1>
    <div className="hero-action">
    <div className="hero-connect"> <AnchorLink className='anchor-link' ofset={50} href='#contact'>Conect With Me</AnchorLink></div>

     <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero