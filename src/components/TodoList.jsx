import { StateProvider } from "../App";
import { useContext } from "react";
import iconCross from "../assets/icon-cross.svg";

export default function TodoList() {
  const context = useContext(StateProvider);
  const { todoList, settodoList } = context;

  const checkItem = (e) => {
    const liItem = e.target.parentElement.parentElement;
    if (e.target.checked) {
      liItem.classList.add("checked");      
    } else {
      liItem.classList.remove("checked");
    }
  };

  return (
    <>
      <ul className="todo__list">
        {todoList.map((item) => {
          return (
            <li
              key={crypto.randomUUID()}
              id={crypto.randomUUID()}
              draggable
              className="todo__list-item"
            >
              <div className="checkbox-div">
                <input
                  type="checkbox"
                  onClick={checkItem}
                  className="checkbox-round"
                />
              </div>
              {item.value}
              <img
                src={iconCross}
                onClick={() => {
                  settodoList(todoList.filter((elem) => elem.value != item.value));
                }}
                className="todo__list-item-icon"
              />
            </li>
          );
        })}
        <li className="todo__list-bottom">
          <span className="todo__list-bottom-ileft">X items left</span>
          <div>
            <span className="filter filter-all active">All</span>
            <span className="filter filter-active">Active</span>
            <span className="filter filter-completed">Completed</span>
          </div>
          <span className="todo__list-bottom-clear">Clear completed</span>
        </li>
      </ul>
    </>
  );
}
