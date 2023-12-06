import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Students from './components/Students'
import Transactions from './components/Transactions'
import AddStudent from './components/AddStudent';
import AddTransaction from './components/AddTransaction'
import Navbar from './components/Navbar'
import ShowStudent from './components/ShowStudent'



function NoPage() {
  return (
    <>
      <Navbar />
      <div className='block max-w-4xl px-6 mx-auto bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700'>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">You Are On A <span className=' text-red-300'>Wrong</span> Page. Err-404</h1>
      </div>
    </>
  )
}



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/students' element={<Students />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/students/:serialNumber' element={<ShowStudent />} />
          <Route path='/students/add-student' element={<AddStudent />} />
          <Route path='/transactions/add-transaction' element={<AddTransaction />} />
          <Route path='/transactions/add-transaction:studentID' element={<AddTransaction />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App