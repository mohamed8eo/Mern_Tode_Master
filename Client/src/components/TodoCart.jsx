import toast from 'react-hot-toast';
import api from '../lib/axios';
import { Link } from 'react-router';
import { formatDate } from '../lib/utils';
import { CheckCircle2, Circle, TrashIcon,PenSquareIcon } from 'lucide-react';

const TodoCart = ({ Todo, setTodo }) => {
  const handleCheckTodo = async (e, id) => {
    e.stopPropagation(); // Stop from triggering parent link
    e.preventDefault();

    const todo = Todo.find((t) => t._id === id);
    try {
      await api.put(`/todos/${id}`, {
        completed: !todo.completed
      });

      // Delay setting state to let animation play
      setTimeout(() => {
        const updatedTodo = Todo.map(todo =>
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodo(updatedTodo);
        if (!todo.completed) {
          toast.success('Todo marked as completed');
        }
      }, 0); // Delay allows icon animation to finish

    } catch (error) {
      toast.error('Failed to update todo');
      console.log("Error updating todo", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodo((prev) => prev.filter((todo) => todo._id !== id));
      toast.success('Todo deleted successfully');
    } catch (error) {
      toast.error('Failed to delete todo');
      console.log("Error deleting todo", error);
    }
  };
  const sortedTodos = [...Todo].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  return (
    <div className='flex flex-col items-center space-y-2'>
      {sortedTodos.map((todo) => (
        <div
          key={todo._id}
          className="w-full bg-white shadow-sm hover:shadow-md transition rounded-xl px-4 py-3 flex items-center justify-between gap-2.5 cursor-pointer hover:bg-gray-50"
        >
        <button
            onClick={(e) => handleCheckTodo(e, todo._id)}
            className="ml- cursor-pointer"
            >
                  {todo.completed ? (
                    <CheckCircle2 className="text-green-500 transition-all duration-300" />
                  ) : (
                    <Circle className="text-gray-400 transition-all duration-300" />
                  )}
                </button>
          <Link to={`/todo/${todo._id}`} className="flex-1 flex flex-col">
            <span className={`font-bold text-[16px] ${todo.completed ? 'line-through text-gray-400' : 'text-[#121417]'}`}>
              {todo.title}
            </span>
            <span className='text-[12px] text-gray-500'>
              {formatDate(new Date(todo.createdAt || todo.date))}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Edit Button */}
            <Link to={`/edit/${todo._id}`} state={{ from: 'home' }} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#EBEDF2] hover:bg-[#dce0e6] text-sm font-medium text-[#121417] transition">
              <PenSquareIcon className="size-4" />
              Edit
            </Link>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(todo._id)}
              className="flex items-center gap-1 px-3 py-1 cursor-pointer rounded-full bg-[#FFECEC] hover:bg-[#fbd5d5] text-sm font-medium text-red-600 transition"
            >
              <TrashIcon className="size-4" />
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default TodoCart;
