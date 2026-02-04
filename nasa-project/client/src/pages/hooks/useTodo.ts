import { Todo } from 'pages/types';
import { create } from 'zustand';
import { v4 as uuid } from 'uuid';

type TodoState = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const useTodo = create<TodoState>()((set) => ({
  todos: [],
  addTodo: (text) =>
    set(({ todos }) => ({
      todos: [...todos, { id: uuid(), text, completed: false }],
    })),
  toggleTodo: (id) =>
    set(({ todos }) => ({
      todos: todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })),
  deleteTodo: (id) =>
    set(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
    })),
}));
