import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import EmployeeForm from './components/EmployeeForm';
import EmployeeData from './components/EmployeeData';
import { Routes, Route, Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
import Login from './components/LoginPage';
import { Button } from 'react-bootstrap';

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const hideSidebar = ()=>{
          setIsOpen(!isOpen);
  }
  const [employeeData, setEmployeeData] = useState([{
    name: 'David',
    gender: 'Male',
    contact: '890',
    email: 'dvd@gmail.com',
    description: 'Manager'
  },
  {
    name: 'John',
    gender: 'Male',
    contact: '876',
    email: 'jhn@gmail.com',
    description: 'Team lead'
  },
  {
    name: 'Alexa',
    gender: 'Female',
    contact: '476',
    email: 'alx@gmail.com',
    description: 'HR'
  }]);
  const [employee, setEmployee] = useState({
    name: '',
    gender: '',
    contact: '',
    email: '',
    description: ''
  });
  
  return (
    <div className="App">
      
      
      <div style={{width:'100%'}}>
       <div className='header'>

        <Hamburger toggled={isOpen} toggle={setIsOpen}/>
        <h2>Employee Management System</h2>
        <Link to='/login' ><Button variant='danger'>Sign out</Button></Link>
       </div>
       <div className='body'>
       <Sidebar isOpen={isOpen} hideSidebar={hideSidebar}/>
      <Routes>
        <Route path="/" element={<EmployeeData employeeData={employeeData} setEmployeeData={setEmployeeData} />}/>
        <Route path="/login" element={<Login  />}/>
        <Route path="employeeForm" element={<EmployeeForm employee={employee} setEmployee={setEmployee} employeeData={employeeData} setEmployeeData={setEmployeeData} />} />
        <Route path="employeeData" element={<EmployeeData employeeData={employeeData} setEmployeeData={setEmployeeData} />}/>
      </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
