import clsx from "clsx";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ id, todo, isCompleted, removeTodo, toggleTodo }) => {
  const todoTextStyles = clsx(
    "todo-app__item-text",
    isCompleted && "todo-app__text-completed"
  );

  return (
    <li className="todo-app__item">
      <span onClick={() => toggleTodo(id)} className={todoTextStyles}>
        {todo}
      </span>
      <div className="todo-app__icons">
        <MdDelete onClick={() => removeTodo(id)} className="todo-app__icon" />
      </div>
    </li>
  );
};

export default TodoItem;
