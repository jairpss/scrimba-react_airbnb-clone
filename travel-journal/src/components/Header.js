import React from "react"
import icon from "../images/world.png"

function Header() {
    return(
        <div className="header">
            <img src={icon} alt="profile-icon" className="header--icon"/>
            <p className="header--title">my travel journal.</p>
        </div>
    )
}

export default Header