import checkedIcon from "../assets/icon-check.svg";
import { StateProvider } from "../App";
import { useContext } from "react";

export default function TodoInput() {
  const context = useContext(StateProvider);
  const {cName, addTodo, setcName} = context;
  
  function addClass(e) {
    if (e.target.checked) {
      setcName("todo__input-icon selected");
    } else {
      setcName("todo__input-icon");
      document.querySelector(".todo__input-checkbox").checked = false;
    }
  }

  return (
    <>
      <form action="" onSubmit={addTodo} className="todo__input">
        <div className="checkbox-div">
          <img className={cName} src={checkedIcon} onClick={addClass} />
          <input
            type="checkbox"
            className="todo__input-checkbox checkbox-round"
            onClick={addClass}
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
