import React, {useState} from "react"
import Details from "./Details"

export default function List(props) {

    const [show, setShow] = useState(false)

    function reveal() {
        setShow(prev => !prev)
    }

    return (
        <div>
            <div className="list" onClick={reveal}>
                {props.name}
                <hr/>
            </div>
            {show && <Details info={{id: props.id, name: props.name}} />}
        </div>
    )
}