export default function TodoInput() {
  return (
    <>
      <form action="" className="todo__input">
          <input type="checkbox" className="todo__input-checkbox checkbox-round" />
          <input type="text" className="todo__input-input" placeholder="Create a new todo..." />
      </form>
    </>
  );
}
