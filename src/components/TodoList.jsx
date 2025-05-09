import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  const todoElements = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      todo={todo.text}
      isCompleted={todo.isCompleted}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
    />
  ));

  return (
    <ul className="todo-app__list">
      {todoElements.length > 0 ? todoElements : null}
    </ul>
  );
};

export default TodoList;
