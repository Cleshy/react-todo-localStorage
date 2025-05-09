import { useEffect, useRef, useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue) {
      setShowMessage(false);
      addTodo(inputValue);
    } else {
      setShowMessage(true);
    }

    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-app__form">
      <label htmlFor="todo" className="todo-app__label">
        What will you achieve today?
      </label>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="todo"
        className="todo-app__input"
        type="text"
        placeholder="e.g. Dance with my cat"
        autoComplete="off"
      />
      {showMessage && (
        <p className="user-message show-message">Blank wins don’t count</p>
      )}
      <button className="todo-app__btn">Make it Happen</button>
    </form>
  );
};

export default TodoForm;
