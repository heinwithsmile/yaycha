import { useContext, useState } from "react";
import List from "./List";
import Item from "./Item";
import Form from "./Form";
import { AppContext } from "./ThemeApp";

function App() {
  const { mode, setMode } = useContext(AppContext);
  const [data, setData] = useState([
    { id: 1, content: "Hello, World!", name: "John" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Doe" }
  ]);
  const [showForm, setShowForm] = useState(false);

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };

  const remove = id => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div style={{
      minHeight: 1500,
      background: mode === "dark" ? "black" : "white",
      color: mode === "dark" ? "white" : "black",
    }}>
      <div style={{
        maxWidth: 600,
        margin: "20px auto"
      }}>
        <h1 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>Yaycha <button onClick={() => setShowForm(!showForm)} style={{
          width: 32, height: 32, borderRadius: 50,
          border: "0 none", background: showForm ? "#dc3545" : "#0d6efd", color: "white"
        }}>{showForm ? "" : "+"}</button>
        <button onClick={()=>setMode(mode === "dark" ? "light" : "dark")} 
        style={{
          marginLeft: 8,
          padding: "0 20px",
          height: 32,
          borderRadius: 32,
          border: "0 none",
          background: mode === "dark" ? "#333" : "#ddd",
        }}
        >
          {mode === "dark" ? "Light" : "Dark"}
        </button>
        </h1>
        {showForm && <Form add={add} />}

        <List>
          {data.map(item => (
            <Item
              key={item.id}
              item={item}
              remove={remove} />
          ))}
        </List>
      </div>
    </div>
  )
}

export default App
