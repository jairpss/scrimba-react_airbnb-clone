import React from "react"
import star from "../img/star.png"

function Card(props) {
    return(
        <section className="card-container">
            <div className="card">
                {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img src={props.img} alt="card-picture" className="card--img"/>
                
                <div className="card--stats">
                    <img src={star} alt="card-star" className="card--star"/>
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>

            </div>
        </section>
    )
}

export default Card