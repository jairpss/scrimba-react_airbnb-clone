import React from "react"
import logo from "../img/airbnb-logo.png"

function Header() {
    return(
        <div className="header">
            <img src={logo} alt="profile-pic" className="header--logo"/>
        </div>
    )
}

export default Header