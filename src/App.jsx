import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </main>
    </>
  );
}
