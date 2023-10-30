import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import EmployeeForm from './components/EmployeeForm';
import EmployeeData from './components/EmployeeData';
import { Routes, Route } from "react-router-dom";

function App() {
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
      <Sidebar />
      <div>
      <h1>Employee Management System</h1>
      <Routes>
        <Route path="/" element={<EmployeeData employeeData={employeeData} setEmployeeData={setEmployeeData} />}/>
        <Route path="employeeForm" element={<EmployeeForm employee={employee} setEmployee={setEmployee} employeeData={employeeData} setEmployeeData={setEmployeeData} />} />
        <Route path="employeeData" element={<EmployeeData employeeData={employeeData} setEmployeeData={setEmployeeData} />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
