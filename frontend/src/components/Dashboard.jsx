import React from 'react'
import Navbar from './Navbar'

function Dashboard() {
  return (
    <div>
      <Navbar />
        <div className='block max-w-4xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700'>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Here are <span className=' text-red-300'>4</span> students in our System</h1>
          <hr className='my-14' />
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Here are <span className=' text-red-300'>3</span> transactions in our System</h1>
        </div>
    </div>
  )
}

export default Dashboard