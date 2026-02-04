import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, Todo } from './types';

const LocalStatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setTodos((prev) => [...prev, { id: uuid(), text: data.todo, completed: false }]);

    reset();
  };

  const handleTodoClick = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const handleDelete = (id: string) => setTodos((prev) => prev.filter((todo) => todo.id !== id));

  return (
    <div className="p-4">
      <p className="mb-4">Hello from LocalState</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-4">
        <input
          {...register('todo')}
          className="rounded border px-4 py-2 "
          type="text"
          placeholder="Type Todo here...."
        />
        <button type="submit" className="rounded bg-blue-400 p-2 text-lg text-white">
          Add Todo
        </button>
      </form>
      <div className="mt-4 flex flex-col gap-y-2 px-4">
        {[...todos.values()].map(({ id, text, completed }) => (
          <div key={id} className="flex gap-x-4">
            <li
              className={'hover:cursor-pointer' + `${completed ? ' line-through' : ''}`}
              onClick={() => handleTodoClick(id)}
            >
              {text}
            </li>
            <button type="button" className="rounded px-1" onClick={() => handleDelete(id)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalStatePage;
