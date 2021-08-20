
import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import NavBar from "./components/Navbar";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterd, setFilters] = useState([]);

  useEffect(() => {
    getLocal()
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todo, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilters(todo.filter((td) => td.completed === true));
        break;
      case "uncompleted":
        setFilters(todo.filter((td) => td.completed === false));
        break;
      default:
        setFilters(todo);
        break;
    }
  };

  const saveLocal = () => {
    
      localStorage.setItem("todo", JSON.stringify(todo));
    
  };

  const getLocal = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem('todo'))
      setTodo(local)
    }
  };


  return (
    
    <div className="App">
    <NavBar/>
      <header>
      
        <h1>Todo List</h1>
        
      </header>
      
      <Form
      
        setInputText={setInputText}
        inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        setStatus={setStatus}
      />
      
      <List filterd={filterd} todo={todo} setTodo={setTodo} />
    </div>
   
  );
}

export default App;
