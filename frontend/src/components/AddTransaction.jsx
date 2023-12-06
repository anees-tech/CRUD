import React from 'react'
import Navbar from './Navbar'
import userData from '../data/userData'

function AddTransaction() {
    let studentsData = userData
  return (
    <div>
        <Navbar/>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                  Changed By
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
                      {item.stbClassName}
                    </td>
                    <td className="px-6 py-4">
                      {item.serialNumber}
                    </td>
                    <td className="px-6 py-4">
                      {item.changedBy}
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