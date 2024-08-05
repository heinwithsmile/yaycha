import Item from "./Item";

import List from "./List";
import Item from "./Item";
import { useState } from "react";

function App(){
  const [data, setData] = useState([
    {id: 1, content: "Hello, World!", name: "John"},
    {id: 2, content: "React is fun.", name: "Bob"},
    {id: 3, content: "Yay, interesting.", name: "Doe"}
  ])

  return (
    <div style={{
      maxWidth: 600,
      margin: "20px auto"
    }}>
      <h1>Yaycha</h1>
      <List>
        {data.map(item => {
          return <Item content={item.content} name={item.name}/>
        })}
      </List>
    </div>
  )
}

export default App
