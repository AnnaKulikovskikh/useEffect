import {useEffect, useState} from "react"
import List from "./components/List"
import './App.css';

function App() {

  const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => setList(data)
      )
    }, [])

  const names = "loading..."

  if (list.length !== 0) {
    const names = list.map(item => {
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
      {/* {JSON.stringify(list, null, 2)} */}
      {/* {list.lenght === 0 ?  <p>loading...</p> : <List data={list}/>} */}
      {names}
    </main>
  )
}

export default App;
