export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
export type FilterOption = "all" | "completed" | "active";

let todos: Todo[] = [{ id: 1, title: "Exercise regularly", completed: false }];

export function addTodo(title: string) {
  const todo: Todo = {
    id: Number(Date.now()),
    title,
    completed: false,
  };
  todos.push(todo);
  return todo;
}
export function removeTodo(id: number) {
  todos = todos.filter((t) => t.id !== id);
}
export function toggleStatus(id: number) {
  const todo = todos.find((t) => t.id == id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  return todo;
}
export function getTodo(id: number) {
  const todo = todos.find((t) => t.id == id);

  return todo;
}
export function updateTitle(id: number, title: string) {
  const todo = todos.find((t) => t.id == id);
  if (todo) {
    todo.title = title;
  }
  return todo;
}
export function deleteAllCompleted() {
  todos = todos.filter((t) => !t.completed);
  return todos;
}

export function getTodos(criteria: FilterOption) {
  switch (criteria) {
    case "all":
      return todos;
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
  }
}
export function clearCompleted() {
  todos = todos.filter((t) => !t.completed);
  return todos;
}
export function todoLeft() {
  return todos.filter((t) => !t.completed).length;
}
