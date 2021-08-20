import React from "react";

const Todo = ({ input, setTodo, todo, td }) => {
  
  const deleteHandler = () => {
    setTodo(todo.filter((el) => el.id !== td.id));
  };

  const completeHandler = () => {
    setTodo(
      todo.map((item) => {
        if (item.id === td.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${td.completed ? "completed" : ""}`}>{input}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
