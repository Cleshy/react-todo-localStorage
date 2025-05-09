import { nanoid } from "nanoid";

export function createTodo(todo) {
  return {
    id: nanoid(),
    text: todo,
    isCompleted: false,
  };
}
