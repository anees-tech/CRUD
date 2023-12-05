import React from 'react'
import { Link } from 'react-router-dom'




function Navbar() {
  return (
    <>
      <nav className='flex justify-around items-center py-5 mt-1 w-full z-20 top-0 left-0 px-auto bg-slate-400'>
        <div className="logo">
          <Link to="/">
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>CRUD</span>
          </Link>
        </div>
        <div className="list-items">
          <ul className='flex justify-between gap-10'>
            <li>
              <Link to={'/students'} className='text-xl text-semibold text-white'>Students</Link>
            </li>
            <li>
              <Link to={'/transactions'} className='text-xl text-semibold text-white'>Transactions</Link>
            </li>
            <li>
              <Link to={'#'} className='text-xl text-semibold text-white'>Admin or User</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar