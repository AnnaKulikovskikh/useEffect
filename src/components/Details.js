import React, { useEffect, useState } from "react"

export default function Detail(props) {
    console.log(props)
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`
    const [info, setInfo] = useState()

    useEffect(()=>{
        fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setInfo(data)
        })
    }, [info])

    return (
        <div>
            <img src={info.aratar} alt="photo"/>
            <h3>{info.name}</h3>
            <p>City: {info.details.city}</p>
            <p>Company: {info.details.company}</p>
            <p>Position: {info.details.position}</p>
        </div>
    )
}



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