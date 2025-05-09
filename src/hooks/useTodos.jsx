import { useEffect, useReducer } from "react";
import useLocalStorage from "./useLocalStorage";

function todosReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    default:
      return state;
  }
}

const useTodos = (storageKey) => {
  const { getItem, setItem } = useLocalStorage(storageKey);

  const [todos, dispatch] = useReducer(todosReducer, [], () => {
    const stored = getItem();
    return stored.length ? stored : [];
  });

  useEffect(() => {
    setItem(todos);
  }, [todos, setItem]);

  function addTodo(todo) {
    dispatch({ type: "ADD", payload: todo });
  }

  function removeTodo(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function toggleTodo(id) {
    dispatch({ type: "TOGGLE", payload: id });
  }

  return { todos, addTodo, removeTodo, toggleTodo };
};

export default useTodos;
