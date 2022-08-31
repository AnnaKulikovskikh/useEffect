import {useEffect, useState} from "react"
import List from "./components/List"
import './App.css';

function App() {

  const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"

  const [list, setList] = useState([])
  let names = "loading..."

  fetch(url)
    .then(res => res.json())
    .then(data => {
      setList(data)
      names = list.map( item => {
        return (
          <List
            key = {item.id}
            id = {item.id}
            name = {item.name}
          />
        )
      })
    } )
  

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => setList(data))
    }, [])

  if (list.length !== 0) {
    names = list.map(item => {
      return (
        <List 
          key={item.id} 
          id={item.id} 
          name={item.name}
        />
      )}
    )
  }


  return (
    <main>
      {names}
    </main>
  )
}

export default App;
