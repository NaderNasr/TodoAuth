import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogOutButton from "./Logout";


const Form = ({setInputText, setTodo, todo, inputText, setStatus}) => {

  const {isAuthenticated} = useAuth0()
  const random = Math.random()
  const inputTextHandler = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodo([...todo, 
      {
        id: Math.round(random * 99999),
        text: inputText, 
        completed: false, 
        
      }])
      setInputText('')
  }

  const filterHandler = (e) => {
    // console.log(e.target.value)
    setStatus(e.target.value)
  }
  
  return (
    <div>
    
        {!isAuthenticated ? (
          <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button disabled onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      ) : (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={filterHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      )}
    </div>
  );
};

export default Form;
