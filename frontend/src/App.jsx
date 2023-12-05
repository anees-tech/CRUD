import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Students from './components/Students'
import Transactions from './components/Transactions'
import AddStudent from './components/AddStudent';



function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/students' element ={<Students />} />
            <Route path='/transactions' element ={<Transactions />} />
            <Route path='/students/:studentID' element ={<Students />} />
            <Route path='/add-student' element ={<AddStudent />} />
          </Routes>
      </Router>
    </>
  )
}

export default App