import { StateProvider } from "../App";
import { useContext } from "react";

export default function TodoInput() {
  const context = useContext(StateProvider);
  const {addTodo} = context;
  
  return (
    <>
      <form action="" onSubmit={addTodo} className="todo__input">
        <div className="checkbox-div">
          <input
            type="checkbox"
            className="todo__input-checkbox checkbox-round"
            />
        </div>
        <input
          type="text"
          className="todo__input-input"
          placeholder="Create a new todo..."
        />
      </form>
    </>
  );
}
