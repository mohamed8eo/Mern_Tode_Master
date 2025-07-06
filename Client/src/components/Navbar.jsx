import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link, useLocation } from 'react-router'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });


  const navItems = [
    { label: 'My Tasks', path: '/' },
    { label: 'Add Task', path: '/create' },
  ];

  return (
    <nav className="border-b border-b-[#E5E8EB] py-3 px-10 justify-between items-center flex">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
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
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </nav>
  )
}

export default Navbar

