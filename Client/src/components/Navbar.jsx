import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link, useLocation } from 'react-router'
import { useState } from 'react'

const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { label: 'My Tasks', path: '/' },
    { label: 'Add Task', path: '/create' },
  ];

  return (
    <nav className="border-b border-b-[#E5E8EB] py-3 px-10 justify-between flex">
      <div className='flex gap-4 items-center'>
        <img
          src="../../Logo.svg"
          alt="logo icon"
        />
        <h1 className='text-[#0D171C] text-lg font-bold leading-6'>TaskMaster</h1>
      </div>
      <div className='flex gap-4 items-center'>
        <ul className='flex items-center gap-2.5 text-[#121417] font-bold transition-all'>
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
        </ul>
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


{/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}