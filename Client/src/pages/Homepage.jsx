import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import api from "../lib/axios";
import TodoCart from "../components/TodoCart";
import { Plus } from 'lucide-react';
import { Link } from "react-router";

const Homepage = () => {
  const [Todo, setTodo] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const FetchingTodo = async () => {
      try {
        const res = await api.get('/todos');
        setTodo(res.data);
        console.log(res.data);
      } catch (error) {
        toast.error('Failed to load todos');
        console.log("Error fetching todos", error);
      } finally {
        setIsLoading(false);
      }
    }
    FetchingTodo();
  }, []);

  return (
    <div className='sm:px-[60px] lg:px-[160px] py-[20px]'>
      <div className='p-4'>
        <h1 className='font-extrabold text-[#121417] text-[40px] leading-[40px]'>My Tasks</h1>
      </div>

      {Todo.length === 0 && (
        <div className="flex flex-col items-center justify-center py-5 text-center space-y-6">
          <img
            src="/../undraw_no-data_ig65.svg"
            alt="No tasks illustration"
            className="w-[220px] h-auto opacity-90"
          />
          <h2 className=" uppercase  text-2xl font-extrabold text-[#121417]">No tasks yet</h2>
          <p className="text-gray-500 max-w-md font-bold">
            Looks like you haven't added any tasks. Start by creating your first one!
          </p>
          <Link to="/create">
            <button className="bg-[#C9DEED] text-[#121417] px-5 cursor-pointer py-2 rounded-full font-semibold hover:bg-[#b4cfe3] transition">
              + Create New Task
            </button>
          </Link>
        </div>
      )}

      <TodoCart Todo={Todo} setTodo={setTodo} />

      {Todo.length > 0 && (
        <>
          <div className="h-[80px]" />

          <div className="fixed bottom-4 right-4 z-50">
            <Link to="/create">
              <div className="bg-[#0F62FE] hover:bg-[#084EDA] transition-colors h-[56px] flex gap-3 rounded-[28px] cursor-pointer items-center pr-[24px] pl-[16px] text-white shadow-lg">
                <Plus size={17} />
                <span className="font-bold text-[16px] leading-[24px]">New Task</span>
              </div>
            </Link>
          </div>
        </>
      )}

    </div>
  )
}

export default Homepage;