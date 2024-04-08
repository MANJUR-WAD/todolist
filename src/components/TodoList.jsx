import React, { useContext } from "react";
import { todoContext } from "../store/TodoContext";

const TodoList = () => {
  const { todoList, removeTodo } = useContext(todoContext);
  console.log(removeTodo);

  return (
    <>
      <div className="todolist">
        <div className="todo-list-wrapper">
          <ul>
            {todoList.map((item, index) => (
              <li key={index}>
                <div className="todo-data">{item.inputdata}</div>
                <div className="remove-btn" onClick={() => removeTodo(index)}>
                  <i className="ri-delete-bin-7-fill"></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
