import React from "react"
import hero from "../img/hero.png"

function Hero() {
    return(
        <section className="hero">
            <img src={hero} alt="profile-pic" className="hero--pic"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero