import React from "react"

export default function List(props) {
    console.log(props)
    return (
        <div>
            {props.name}
            <hr/>
        </div>
    )
}