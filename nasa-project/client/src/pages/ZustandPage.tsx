import { useForm, SubmitHandler } from 'react-hook-form';
import { FormValues, Todo } from './types';
import { useTodo } from './hooks/useTodo';

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  const { id, text, completed } = todo;

  const deleteTodo = useTodo((s) => s.deleteTodo);
  const toggleTodo = useTodo((s) => s.toggleTodo);

  return (
    <div className="flex gap-x-4">
      <button
        type="button"
        className={`hover:cursor-pointer ${completed ? 'line-through' : ''}`}
        onClick={() => toggleTodo(id)}
      >
        {text}
      </button>
      <button
        type="button"
        aria-label={`Delete ${text}`}
        className="rounded px-1"
        onClick={() => deleteTodo(id)}
      >
        🗑️
      </button>
    </div>
  );
};

const ZustandPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormValues>();
  const todos = useTodo((s) => s.todos);
  const addTodo = useTodo((s) => s.addTodo);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addTodo(data.todo.trim());
    reset();
  };

  return (
    <div className="p-4">
      <p className="mb-4">Hello from Zustand</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-4">
        <input
          {...register('todo', {
            required: true,
            validate: (txt) => txt.trim().length > 0,
          })}
          className="rounded border px-4 py-2 "
          type="text"
          placeholder="Type Todo here...."
        />
        <button
          type="submit"
          className="rounded bg-blue-400 p-2 text-lg text-white"
          disabled={!isValid}
        >
          Add Todo
        </button>
      </form>
      <div className="mt-4 flex flex-col gap-y-2 px-4">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default ZustandPage;
