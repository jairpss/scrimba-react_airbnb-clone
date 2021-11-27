import React from "react"
import location from "../images/location-icon.svg"

function Card(props) {

    return(
        <div className="card">
            <img src={`${props.item.imageUrl}`} alt="card-image" className="card--img"/>
            <div className="card--info">
                <div className="card--info_location">
                    <img src={location} alt="location-icon" className="card--info_location-icon"/>
                    <p className="card--country">{props.item.location}</p>
                    <a href={`${props.item.googleMapsUrl}`} className="card--link">View on Google Maps</a>
                </div>
                <h1 className="card--info_title">{props.item.title}</h1>
                <p className="card--info_dates">
                    {props.item.startDate} - {props.item.endDate}
                </p>
                <p>{props.item.description}</p>
            </div>
        </div>
      
    )
}

export default Card