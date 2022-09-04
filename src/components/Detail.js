import React from "react"

export default function Detail(props) {
    
    return (
        <div className="detail">
            <img src={props.data.avatar} alt="face"/>
            <h3>{props.data.name}</h3>
            <p>City: {props.data.details.city}</p>
            <p>Company: {props.data.details.company}</p>
            <p>Position: {props.data.details.position}</p>
        </div>
    )
}