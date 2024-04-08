import React, { useContext, useState } from "react";
import { todoContext } from "../store/TodoContext";

const TodoField = () => {
  const [inputdata, setInputData] = useState("");
  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const { addTodo } = useContext(todoContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTodo({inputdata});
    setInputData("");
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <div className="container-todo">
        <form action="#" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputdata} placeholder="Enter Todo"/>
        <button
          type="submit"
        >
          + 
        </button>
        </form>
      </div>
    </>
  );
};

export default TodoField;
