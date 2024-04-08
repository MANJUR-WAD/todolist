import { createContext, useState } from "react";

const todoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (textdata) => {
    setTodoList([...todoList, textdata]);
  };
  const removeTodo = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };
  return (
    <todoContext.Provider value={{ todoList, setTodoList, addTodo , removeTodo }}>
      {children}
    </todoContext.Provider>
  );
};

export { todoContext, TodoProvider };
