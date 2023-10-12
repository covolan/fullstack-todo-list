import { useState, createContext } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

export const StateProvider = createContext();

export default function App() {
  const [cName, setcName] = useState("todo__input-icon");
  const [todoList, settodoList] = useState([]);
  
  function checkCheck(e) {
    const [checkToggle, setcheckToggle] = useState("icon");
    if (e.target.checked) {
      setcheckToggle("icon selected");
    } else {
      setcheckToggle("icon");
    }
  }

  function addTodo(e) {
    e.preventDefault();
    let temp = document.querySelector(".todo__input-input").value;
    if (!(temp.trim() == "" || temp == null)) {
      settodoList(oldtodoList => [...oldtodoList, temp]);
      document.querySelector(".todo__input-input").value = "";
    }
  }
  
  return (
    <>
      <main>
        <TodoHeader />
        <StateProvider.Provider value={{cName, todoList, addTodo, setcName, checkCheck}} >
          <TodoInput />
          <TodoList />
        </StateProvider.Provider>
      </main>
    </>
  );
}
