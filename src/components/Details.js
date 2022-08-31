import React, { useEffect, useState } from "react"
import Detail from './Detail'

export default function Details(props) {
    
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`
    const [info, setInfo] = useState({})
    
    let show = false

    useEffect(()=>{
        fetch(url)
          .then(res => res.json())
          .then(data => setInfo(data))
    }, [])

    if (Object.keys(info).length) {
        show = true
    }
    
    return (
        <div className="details">
           {true && <Detail info={info} />}
        </div>
    )
}

            // <img src={info.aratar} alt="photo"/>
            // <h3>{info.name}</h3>
            // <p>City: {info.details.city}</p>
            // <p>Company: {info.details.company}</p>
            // <p>Position: {info.details.position}</p>


// {
//     "id": 1,
//     "name": "Dorthy McClure Sr.",
//     "avatar": "https://i.pravatar.cc/300",
//     "details": {
//         "city": "Sipesfort",
//         "company": "Hilll LLC",
//         "position": "Regional Identity Supervisor"
//     }
// }