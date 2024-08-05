import { useState } from "react";
import List from "./List";
import Item from "./Item";

function App(){
  const [data, setData] = useState([
    {id: 1, content: "Hello, World!", name: "John"},
    {id: 2, content: "React is fun.", name: "Bob"},
    {id: 3, content: "Yay, interesting.", name: "Doe"}
  ]);

  const remove = id => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: "20px auto"
    }}>
      <h1>Yaycha</h1>
      <List>
        {data.map(item => (
          <Item 
          key={item.id}
          item={item} 
          remove={remove}/>
        ))}
      </List>
    </div>
  )
}

export default App
