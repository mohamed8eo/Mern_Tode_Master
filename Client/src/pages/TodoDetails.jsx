import { TrashIcon, Tag ,CalendarDays, Briefcase, Heart, Dumbbell, Book, Home, ShoppingCart } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router'
import toast from "react-hot-toast";
import api from '../lib/axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { formatDate } from '../lib/utils';

const TodoDetails = () => {
  const categoryStyles = {
  Work: {
    icon: <Briefcase size={14} />,
    bg: 'bg-[#E0F2FE]',
    text: 'text-[#0369A1]',
  },
  Personal: {
    icon: <Heart size={14} />,
    bg: 'bg-[#FEE2E2]',
    text: 'text-[#B91C1C]',
  },
  Fitness: {
    icon: <Dumbbell size={14} />,
    bg: 'bg-[#DCFCE7]',
    text: 'text-[#15803D]',
  },
  Study: {
    icon: <Book size={14} />,
    bg: 'bg-[#F3E8FF]',
    text: 'text-[#7E22CE]',
  },
  Home: {
    icon: <Home size={14} />,
    bg: 'bg-[#FEF9C3]',
    text: 'text-[#CA8A04]',
  },
  Shopping: {
    icon: <ShoppingCart size={14} />,
    bg: 'bg-[#FFE4E6]',
    text: 'text-[#BE123C]',
  },
  default: {
    icon: <Tag size={14} />,
    bg: 'bg-[#E6F0FA]',
    text: 'text-[#0F62FE]',
  },
};

  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false)

  const { id } = useParams() 
  const navigate = useNavigate();
   
  console.log({id})

  useEffect(() => {
    const FetchNote = async () => {
      try {
        const res = await api.get(`/todos/${id}`);
        setTodo(res.data)
        console.log(res.data)
      } catch (error) {
        console.log('Error in Fetching Note', error)
        toast.error('Failed to Fetch the Note')
      } finally {
        setLoading(false)
      }
    }
    FetchNote();
  },[id])

console.log({todo})

  const handleDelete = async () => {
    try {
      await api.delete(`/todos/${id}`)
      toast.success("Note deleted successfully")
      navigate("/");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  }

  const handleCheck = async () => {
    try {
      await api.put(`/todos/${id}`, {
        completed: !todo.todo.completed
      });
      setTodo(prev => ({
        ...prev,
        todo: {
          ...prev.todo,
          completed: !prev.todo.completed
        }
      }));
    } catch (error) {
      console.log("Error in handleCheck", error);
      toast.error("Failed to update note");
    }
  }

  return (
    <div className='sm:px-[60px] lg:px-[160px] py-[20px]'>
      <div className='p-4'>
        <div className="breadcrumbs text-sm">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link >Task Details</Link></li>
          </ul>
        </div>

        <div className='flex justify-between mb-[50px]'>
          <div className='flex items-center gap-1.5'>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox"
              onChange={handleCheck}
              checked={todo?.todo.completed}
            />
            <h1 className='text-[#121417] font-extrabold text-[40px] leading-[40px]'>{todo?.todo.title || "Loading..."}</h1>
          </div>
          <div className='flex gap-2.5 items-center'>
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={handleDelete}
              >
                <TrashIcon className="size-4"/>
              </button>
            <Link to={`/edit/${id}`} state={{ from: 'details' }}>
            <button className='btn rounded-[16px] px-4 bg-[#EBEDF2] h-[32px] w-[84px] text-sm font-medium leading-[21px] text-[#121417]'>
              Edit
            </button>
            </Link>
          </div>
        </div>
        {todo?.todo.description && (
          <div className="bg-white shadow-sm rounded-xl p-4 space-y-4">
            <h4 className="text-[#121417] font-semibold text-lg mb-2">Description:</h4>
            <p className="text-[#4B5563] text-base leading-relaxed pl-2 border-l-4 border-[#C9DEED]">
              {todo.todo.description}
            </p>
          </div>
        )}

        {todo?.todo.createdAt && (
          <div className="mt-6 bg-white shadow-sm rounded-xl p-4 space-y-4">
            <h4 className="text-[#121417] font-semibold text-lg mb-2">Created At:</h4>
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#4B5563] text-sm font-medium px-4 py-1 rounded-full">
              <CalendarDays size={14} />
              {formatDate(new Date(todo.todo.createdAt))}
            </div>
          </div>
        )}

          {todo?.todo.category && (
            <div className="mt-6 bg-white shadow-sm rounded-xl p-4 space-y-4">
              <h4 className="text-[#121417] font-semibold text-lg mb-2">Category:</h4>
              <div className="flex flex-wrap gap-2">
                {todo.todo.category.split(',').map((raw, idx) => {
                  const cat = raw.trim();
                  const style = categoryStyles[cat] || categoryStyles.default;
                  return (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-2 ${style.bg} ${style.text} text-sm font-medium px-4 py-1 rounded-full`}
                    >
                      {style.icon}
                      {cat}
                    </span>
                  );
                })}
              </div>
            </div>
          )}



      </div>
    </div>
  )
}

export default TodoDetails