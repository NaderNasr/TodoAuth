import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Todo from "./Todo";

const List = ({filterd, todo, setTodo}) => {
  const {isAuthenticated} = useAuth0()
  return (
    <div>
    {!isAuthenticated ? (
      <div style={{textAlign: 'center'}}>
        <h2>
        Please sign in to view list
        </h2>
      </div>
    ) : (
      <div className="todo-container">
        <ul className="todo-list">
            {filterd.map(td => (
                <Todo key={td.id} input={td.text} setTodo={setTodo} todo={todo} td={td}/>
            ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default List;
