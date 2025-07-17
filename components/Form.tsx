import { useState } from 'react';
import { useAddTodoMutation } from '@/libs/api/todo';

const Form = () => {
  const [title, setTitle] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    await addTodo({
      userId: 1,
      title,
      completed: false,
    });
    
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo..."
          className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;