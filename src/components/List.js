import React from "react"
import Details from "./Details"

export default function List(props) {
    console.log(props)

    // if (!props.data) return null

    // const names = props.data.map(name => {
    //     return(
    //         <div key ={name.id}>
    //             {name.name}
    //         </div>
    //     )
    // })

    function reveal() {
        return (
            <Details info={{id: props.id, name: props.name}}/>
        )
    }

    return (
        <div className="list" onClick={reveal}>
            {props.name}
            <hr/>
        </div>
    )
}