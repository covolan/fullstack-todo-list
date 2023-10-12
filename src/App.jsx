import { useState, createContext } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

export const StateProvider = createContext();

export default function App() {
  const [todoList, settodoList] = useState([]);
  
  function addTodo(e) {
    e.preventDefault();
    const checkBox = document.querySelector(".todo__input-checkbox");
    let inputValue = {value: document.querySelector(".todo__input-input").value, check: false};
    if (checkBox.checked) {
      inputValue.check = true;
    }
    if (!(inputValue.value.trim() == "" || inputValue.value == null)) {
      settodoList(oldtodoList => [...oldtodoList, inputValue]);
      document.querySelector(".todo__input-input").value = "";
    }
  }
  
  return (
    <>
      <main>
        <TodoHeader />
        <StateProvider.Provider value={{todoList, addTodo, settodoList}} >
          <TodoInput />
          <TodoList />
        </StateProvider.Provider>
      </main>
    </>
  );
}
