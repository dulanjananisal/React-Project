import React from "react";

export default function(props){
    return(
        <main>
            <div className="card">
                <div className="card-img">
                    <img src={props.img} />
                </div>
                <div className="card-info">
                    <p className="location"><i class="fa fa-map-marker" aria-hidden="true"></i>{props.country} <span><a href={props.googleMap}>View on Google Maps</a></span></p>
                    <h1>{props.location}</h1>
                    <h4>{props.date}</h4>
                    <p className="title">{props.title}</p>
                </div>
            </div>
            <hr />
        </main>
    )
}