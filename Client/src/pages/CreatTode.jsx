import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import api from '../lib/axios';
const CreatTode = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  if (!title.trim() || !date.trim() || !category.trim() ) {
    toast.error("Title, Date, and Category are required");
    return;
  }

    setIsLoading(true)

    try {
      await api.post('/todos', {
        title,
        description,
        date,
        category
      });
      navigate('/')
    } catch (error) {
      toast.error("Failed to create note");
      console.log("Error creating note", error);
    } finally {
      setIsLoading(false)
    }

  }


  return (
    <div className='sm:px-[60px] lg:px-[160px] py-[20px] container'>
      <div className='p-4'>
        <div className="breadcrumbs text-sm mb-1.5">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link >Creating Task</Link></li>
          </ul>
        </div>
        <h1 className='font-extrabold text-[#121417] text-[40px] leading-[40px]'>Add Task</h1>
      </div>

      <div className=' card'>
        <div className=' card-body'>
          <form onSubmit={handleSubmit}>
            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Task Name</span>
              </label>

              <input
                type="text"
                placeholder='eg. Buy Groceries'
                className='p-4 rounded-[12px] bg-[#E8EDF2] placeholder:text-[#4D7899] text-[#121417] text-[16px] leading-[24px] font-bold'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Description</span>
              </label>

              <textarea
                placeholder='eg. Buy groceries for the week'
                className='p-4 rounded-[12px] bg-[#E8EDF2] placeholder:text-[#4D7899] text-[#121417] text-[16px] leading-[24px] font-bold resize-none h-[100px]'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Dut Date</span>
              </label>

              <input
                type="date"
                className='p-4 rounded-[12px] bg-[#E8EDF2] placeholder:text-[#4D7899]  text-[#121417] text-[16px] leading-[24px] font-bold'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Status</span>
              </label>

              <select className='p-4 rounded-[12px] bg-[#E8EDF2] placeholder:text-[#4D7899] text-[#121417] text-[16px] leading-[24px] font-bold'>
                <option value='pending'>Pending</option>
                <option value='completed'>Completed</option>
              </select>
            </div> */}

            {/* making catergory for the taskl */}
            <div className='form-control mb-4 flex flex-col gap-2'>
              <label className='label'>
                <span className='text-[16px] leading-[24px] font-bold text-[#0D171C]'>Category</span>
              </label>

              <input
                type="text"
                placeholder='eg. Work, Personal'
                className='p-4 rounded-[12px] bg-[#E8EDF2] placeholder:text-[#4D7899] text-[#121417] text-[16px] leading-[24px] font-bold'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className='flex justify-end'>
              <button className='btn flex bg-[#128FE8] rounded-[20px] justify-end text-white px-5' disabled={isLoading}>
                  {isLoading ? "Creating..." : "Add Todo"}
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default CreatTode