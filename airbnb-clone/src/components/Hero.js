import React from "react"
import hero from "../img/hero.png"

function Hero() {
    return(
        <div className="hero">
            <img src={hero} alt="profile-pic" className="hero--pic"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero