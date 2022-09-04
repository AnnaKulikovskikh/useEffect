import React, { useEffect, useState } from "react"
import Detail from './Detail'

export default function Details(props) {
    
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`
    const [info, setInfo] = useState({})
    
    useEffect(()=>{
        fetch(url)
          .then(res => res.json())
          .then(data => setInfo(data))
    }, [])
    
    return (
        <div className="details">
            {!Object.keys(info).length ? <p>loading...</p> : <Detail data={info}/>}
        </div>
    )
}