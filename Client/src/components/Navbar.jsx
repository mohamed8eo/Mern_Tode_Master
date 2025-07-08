import { ClerkDegraded, SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton, useUser} from '@clerk/clerk-react'
import { Link, useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { LogOutIcon, User2Icon, Trash2Icon } from 'lucide-react';
import api from '../lib/axios';


const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });


  const navItems = [
    { label: 'My Tasks', path: '/' },
    { label: 'Add Task', path: '/create' },
  ];


  const { user, isSignedIn } = useUser();
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    if (isSignedIn && user && !synced) {
        api.post('/sync-user', { clerkId: user.id })
        .then(() => setSynced(true))
          .catch(() => setSynced(false));
      
    }
  }, [isSignedIn, user, synced])

  return (
    <nav className="border-b border-b-[#E5E8EB] p-3 sm:py-3 sm:px-10 justify-between items-center flex">
      <Link to="/">
        <div className='flex gap-4 items-center'>
          <img
            src="../../Logo.svg"
            alt="logo icon"
          />
          <h1 className='text-[#0D171C] text-lg font-bold leading-6'>TaskMaster</h1>
        </div>
      </Link>
      <div className='flex gap-4 items-center'>
        {isMobile
          ? <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow custom-dropdown left-[-73px] w-[130px]"
            >
                {navItems.map((item) => (
                  <li key={item.path} className="my-1">
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 rounded-lg transition-all duration-200 font-semibold  `}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          : <ul className='flex items-center gap-2.5 text-[#121417] font-bold transition-all'>
          {navItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <li
                className={`leading-5 text-sm cursor-pointer px-4 h-[40px] flex items-center rounded-[20px] transition-colors duration-200
                  ${
                    hovered === item.path
                      ? 'bg-[#C9DEED]'
                      : location.pathname === item.path && !hovered
                      ? 'bg-[#C9DEED]'
                      : ''
                  }
                `}
                onMouseEnter={() => setHovered(item.path)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.label}
              </li>
            </Link>
          ))}
          </ul>}
          <SignedIn>
            <UserButton />
          </SignedIn>
        <header className='flex flex-col sm:flex-row gap-1.5 '>
          <SignedIn>
            <SignOutButton>
              <button
                className="px-5 py-2 cursor-pointer rounded-[20px] font-bold bg-[#0F62FE] text-white transition-colors duration-200 hover:bg-[#084EDA] shadow sm:flex items-center gap-2   h-[30px]"
                >
                <LogOutIcon className='h-4 w-4' />
                <span className='hidden sm:inline'>log out</span>
              </button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal'>
              <button
                className="w-[100px] sm:w-32 p-0 sm:px-5 h-[27px] sm:h-auto sm:py-2  cursor-pointer rounded-[20px] font-bold bg-[#0F62FE] text-white transition-all duration-200 hover:bg-[#084EDA] shadow tracking-wide "
              >
                Log In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedOut>
            <SignUpButton mode='modal'>
              <button
                className=" w-[100px] sm:w-32 p-0 sm:px-5 sm:py-2 cursor-pointer rounded-[20px] font-bold bg-white text-[#0F62FE] border-2 border-[#0F62FE] transition-all duration-200 hover:bg-[#C9DEED] hover:text-[#0F62FE] shadow tracking-wide"
              >
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </header>
      </div>
    </nav>
  )
}

export default Navbar

