export default function TodoList() {
  return (
    <>
      <ul className="todo__list">
        <li className="todo__list-item">
          <div className="checkbox-div">
            {" "}
            <input type="checkbox" className="checkbox-round" />{" "}
          </div>
          Item 1
        </li>
        <li className="todo__list-item">
          <div className="checkbox-div">
            {" "}
            <input type="checkbox" className="checkbox-round" />{" "}
          </div>
          Item 2
        </li>
        <li className="todo__list-item">
          <div className="checkbox-div">
            {" "}
            <input type="checkbox" className="checkbox-round" />{" "}
          </div>
          Item 3
        </li>
        <li className="todo__list-item">
          <div className="checkbox-div">
            {" "}
            <input type="checkbox" className="checkbox-round" />{" "}
          </div>
          Item 4
        </li>
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
