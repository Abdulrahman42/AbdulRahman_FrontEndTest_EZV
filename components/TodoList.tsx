import { Todo } from '@/types/todo';

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div key={todo.id} className="p-3 border rounded flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            readOnly
            className="mr-3"
          />
          <span className={todo.completed ? 'line-through text-black' : ''}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;