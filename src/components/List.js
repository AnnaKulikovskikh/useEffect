import React, {useState} from "react"
import Details from "./Details"

export default function List(props) {

    const [show, setShow] = useState(false)
    const [id, setId] = useState(0)

    const names = props.info.map(item => {
        return(
            <li key={item.id} onClick={reveal} className={item.id} id='listel'>
                {item.name}
                <hr className="hr"></hr>
            </li>
        )
    })

    function reveal(e) {
        e.preventDefault()
        if (e.target.className === "hr") return
        if (Number(e.target.className) === id) return

        setId(Number(e.target.className))
        setShow(prev => !prev)
        if (!show) {
            e.target.classList.add('chosen')  
        } else {
            const name = document.querySelector('.chosen')
            name.classList.remove('chosen')
        }
    }
    
    return (
        <div>
            <ul className="list">
                {names}
            </ul>
            {show && <Details info={{id: props.info[id-1].id, name: props.info[id-1].name}} />}
        </div>
    )
}
