import React from 'react'
import Navbar from './Navbar'
import userData from '../data/userData'
import { useNavigate, Link } from 'react-router-dom'

function AddTransaction() {
  let navigate = useNavigate()
  let studentsData = userData;

  const discardOnClick = () => {
    navigate('/students')
  }

  return (
    <div>
      <Navbar />
      <div className="block max-w-full p-6 mb-5 mx-10 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <Link to={'/transactions'} className=" flex items-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <h2  className='mr-5 mt-2  text-center bg-white rounded-full hover:bg-gray-100 '>
            <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='text-gray-600 hover:text-gray-900' fill="currentColor"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"></path></svg>
          </h2>
          Back
        </Link>
      </div>
      <table className=" w-11/12 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3">
              Class
            </th>
            <th scope="col" className="px-6 py-3">
              Serial Number
            </th>
            <th scope="col" className="px-6 py-3">
              Student CNIC
            </th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((item, index) => {
            return (
              <tr key={index} className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.stdName}
                </th>
                <td className="px-6 py-4">
                  {item.stdClassName}
                </td>
                <td className="px-6 py-4">
                  {item.serialNumber}
                </td>
                <td className="px-6 py-4">
                  {item.stdCNIC}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default AddTransaction