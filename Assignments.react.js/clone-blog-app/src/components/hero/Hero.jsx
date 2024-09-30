import React from 'react'
import './hero.css'
import { blogsData } from "../constant/blog";
import Card from '../card/Card'
import database_icon from '../../assets/database.svg'
import accessibility_icon from '../../assets/accessibility.svg'
import rocket_icon from '../../assets/rocket.svg'
import FB_icon from '../../assets/facebook.svg'
import twitter_icon from '../../assets/twitter.svg'
import discord_icon from '../../assets/discord.svg'
import Button  from '../button/Button';


const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="blog">
                    <h2 className='blog-main-heding'>Latest Blog Post</h2>
                    <div className="blog-card-group">

                        {blogsData?.map((item, index) => {
                            return <Card key={index} data={item} />
                        })}
                    </div>
                   <div className="load-more-btndiv">
                   <Button>Load More</Button>
                   </div>
                </div>


            </div>
            <div className="hero-right">

                <div className="topic">
                    <h2 className="Topic-heading">Topics</h2>
                    <div className="div-topic-btn">
                        <img className='icon-topic-btn' src={database_icon} alt="" />
                        <a className='a-topic-btn' href=""><span className='a-heading'>Database</span></a>
                    </div>
                    <div className="div-topic-btn">
                        <img className='icon-topic-btn' src={accessibility_icon} alt="" />
                        <a className='a-topic-btn' href=""><span className='a-heading'>Accessibility</span></a>
                    </div>
                    <div className="div-topic-btn">
                        <img className='icon-topic-btn' src={rocket_icon} alt="" />
                        <a className='a-topic-btn' href=""><span className='a-heading'>Web Performance</span></a>
                    </div>
                </div>
                <div className="main-div-card">
                    <h2 className='card-heading'>Tags</h2>
                    <div className='card-div'>
                        <div className="card-div-content">
                            <a>#mongodb</a>
                            <a>#nodeJs</a>
                            <a>#a11y</a> <br />
                            <a>#mobility</a>
                            <a>#inculsion</a> <br />
                            <a>#webperf</a>
                            <a>#optimize</a> <br />
                            <a>#performance</a>
                        </div>
                    </div>
                </div>
                <div className="main-div-card3">
                   <h2>let's Talk</h2>
                   <div className="card3-white-div-box">
                    <div className="card3-text-div">
                        <p>Do you want to learn more <br /> about how I can help your <br /> company overcome <br /> problems? Let us have a <br /> conversation.</p>
                    </div>
                    <div className="card3-icons-div">
                        <img src={discord_icon} alt="" />
                        <img src={twitter_icon} alt="" />
                        <img src={FB_icon} alt="" />
                    </div>
                   </div>
                </div>
                <div className="main-card4-div">
                    <h2>Newsletter</h2>
                    <div className="card4-white-div-box">
                        <div className="card4-text-div">
                            <p>Subscribe to our newsletter <br /> to be among the first to <br /> keep up with the latest <br /> updates.</p>
                        </div>
                        <input className='card4-inp' type="email" name="email" placeholder='Email Address' />
                        <Button>Subscribe</Button>                   
                    </div>
                </div>
            </div>
        </div>
    )
}       

export default Hero