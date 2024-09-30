import React from 'react'
import "./card.css"
import clock_icon from '../../assets/clock-icon.svg'

const Card = (props) => {
    return (
        <div className="blog-card">
            <div className="blog-card-banner">
                <img src={props?.data?.cardImage} alt="Building microservices with Dropwizard, MongoDB & Docker"
                     className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">

                <button className="blog-topic-text-tiny">{props?.data?.topic}</button>

                <h3>
                    <a href="#" className="h3">
                       {props?.data?.title}
                    </a>
                </h3>

                <p className="blog-text">
                    {props?.data?.text}
                </p>

                <div className="wrapper-flex">

                    <div className="profile-wrapper">
                        <img src={props?.data?.author?.image} alt="Julia Walker" width="50" />
                    </div>

                    <div className="wrapper">
                        <a href="#" className="h4">{props?.data?.author?.name}</a>

                        <p className="text-sm">
                            <time datetime="2022-01-17">{props?.data?.author?.date}</time>
                            <span className="separator">.</span>
                            <img className='clock-icon' src={clock_icon} alt="" />
                            <time datetime="PT3M">{props?.data?.author?.time}</time>
                        </p>
                    </div>

                </div>

            </div>

        </div>
  )
}

export default Card