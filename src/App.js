import React, {useEffect, useState} from "react"
import List from "./components/List"
import './App.css'

function App() {

  const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => setList(data))
    }, [])

  return (
    <main>
      {list.length === 0 ? <p>loading...</p> : <List info={list}/>}
    </main>
  )
}

export default App
