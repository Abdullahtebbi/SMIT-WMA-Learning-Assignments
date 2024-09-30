import React from 'react'
import './home.css'
import Button from '../button/Button'
import pattern from '../../assets/pattern.png'
import hero from '../../assets/hero-circle.png'

const Home = () => {
  return (
    <div className='home'>
        <div className="left">
            <h1>Hi, I'm <span>Julia Walker</span>.<br />Web Developer</h1>
            <p>Specialized in a11y and Core Web Vitals</p>
            <Button>Contact Me</Button>
            <button style={{background:'white', color:'grey', border:'3px solid grey', marginLeft:'30px', cursor:'pointer',}}>About Me</button>
        </div>
        <div className="right">
           <img className='right-background' src={pattern} alt="" />
           <div className='circle-1'></div>
           <div className='circle-2'></div>
           <img className='right-img' src={hero} alt="" />
        </div>
        
    </div>
  )
}

export default Home