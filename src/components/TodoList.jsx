import icon from "../assets/icon-check.svg";
import { StateProvider } from "../App";
import { useContext } from "react";

export default function TodoList() {
  const context = useContext(StateProvider);
  const { todoList } = context;

  return (
    <>
      <ul className="todo__list">
        {todoList.map((item) => {
          return (
            <li key={crypto.randomUUID()} className="todo__list-item">
              <div className="checkbox-div">
                <img src={icon} />
                <input type="checkbox" className="checkbox-round" />
              </div>
              {item}
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
