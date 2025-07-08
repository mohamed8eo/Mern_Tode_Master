import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import api from '../lib/axios';
import toast from 'react-hot-toast';

const EditTodoPage = () => {
  const location = useLocation();
  const from = location.state?.from || '/';

  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const FetchTodoByid = async () => {
      try {
        const res = await api.get(`/todos/${id}`);
        setLoading(true);
        if (res.status === 200) {
          console.log(res.data);
          setTodo(res.data);
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch todo details');
      } finally {
        setLoading(false);
      }
    };
    FetchTodoByid();
  }, [id]);


  const handleSaveChanges = async () => {
    if(!todo?.todo.title.trim() || !todo?.todo.date.trim() || !todo?.todo.category.trim()) {
      toast.error("Title, Date, and Category are required");
      return;
    }
    try {
      await api.put(`/todos/${id}`, todo.todo);
      toast.success('Todo updated successfully');
      navigate('/')
    } catch (error) {
      console.log("Error in handleSave", error);
      toast.error("Failed to update  note");
    } 
   }


  return (
    <div className='sm:px-[60px] lg:px-[160px] py-[20px] container'>
      <div className='p-4'>
        <div className="breadcrumbs text-sm">
          <ul>
            <li><Link to='/'>Home</Link></li>
            {from === 'details' && (
              <li><Link to={`/todo/${id}`}>Task Details</Link></li>
            )} 
            <li><Link to={from}>Edit Task</Link></li>
          </ul>
        </div>
        <h1 className='font-extrabold text-[#121417] text-[40px] leading-[40px]'>Edit Task</h1>
      </div>

      <div className='card'>
        <div className='card-body'>
          <form>
            {/* Task Name */}
            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Task Name</span>
              </label>
              <input
                type="text"
                className='p-4 rounded-[12px] bg-[#E8EDF2] placeholder:text-[#4D7899] text-[#121417] text-[16px] leading-[24px] font-bold'
                value={todo?.todo.title || ''}
                onChange={(e) => setTodo(prev => ({
                  ...prev,
                  todo: {
                    ...prev.todo,
                    title: e.target.value
                  }
                }))} />
            </div>
            {/* Description */}
            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Description</span>
              </label>
              <textarea
                className='p-4 rounded-[12px] bg-[#E8EDF2]  text-[#121417] text-[16px] leading-[24px] font-bold resize-none h-[100px]'
                value={todo?.todo.description || ''}
                onChange={(e) => setTodo(prev => ({
                  ...prev,
                  todo: {
                    ...prev.todo,
                    description: e.target.value
                  }
                }))} />
            </div>

            {/* Date */}
            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Date</span>
              </label>
              <input
                type="date"
                className='p-4 rounded-[12px] bg-[#E8EDF2] text-[#121417] text-[16px] leading-[24px] font-bold'
                value={todo?.todo.date ? new Date(todo.todo.date).toISOString().split('T')[0] : ''}
                onChange={(e) =>
                setTodo((prev) => ({
                  ...prev,
                  todo: {
                    ...prev.todo,
                    date: e.target.value,
                  },
                }))
              }
            />

            </div>


            {/* Category */}
            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Category</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Work, Personal, Shopping"
                className='p-4 rounded-[12px] bg-[#E8EDF2] text-[#121417] text-[16px] leading-[24px] font-bold'
                value={todo?.todo.category || ''}
                onChange={(e) =>
                  setTodo((prev) => ({
                    ...prev,
                    todo: {
                      ...prev.todo,
                      category: e.target.value, // This will hold comma-separated values
                    },
                  }))
                }
              />
            </div>

          </form>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSaveChanges}
              className="btn flex bg-[#128FE8] rounded-[20px] justify-end text-white px-5"
            >
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EditTodoPage