import "./App.css";
import useTodos from "./hooks/useTodos";
import { createTodo } from "./utils/createTodo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos("YourDailyWins");

  const handleTodoAdd = (value) => {
    if (!value.trim()) return;
    addTodo(createTodo(value));
  };

  return (
    <section className="todo-app">
      <h1 className="todo-app__title">Your Daily Wins</h1>
      <TodoForm addTodo={handleTodoAdd} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </section>
  );
}
