import checkedIcon from "../assets/icon-check.svg";

export default function TodoInput() {
  return (
    <>
      <form action="" className="todo__input">
        <div className="checkbox-div">
          <img className="todo__input-icon" src={checkedIcon} alt="" />
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
