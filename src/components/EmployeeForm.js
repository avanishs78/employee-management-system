import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function EmployeeForm(props) {
    const { employee, setEmployee, employeeData, setEmployeeData } = props;

    const handleNameChange = (e) => {
        setEmployee({ ...employee, name: e.target.value });
    }
    const handleGenderChange = (e) => {
        setEmployee({ ...employee, gender: e.target.value });
        console.log(e.target.value);
    }
    const handleContactChange = (e) => {
        setEmployee({ ...employee, contact: e.target.value });
    }
    const handleEmailChange = (e) => {
        setEmployee({ ...employee, email: e.target.value });
    }
    const handleDescriptionChange = (e) => {
        setEmployee({ ...employee, description: e.target.value });
    }
    const SubmitEmployeeData = () => {
        if(employee.name && employee.contact && employee.email && employee.description){
            setEmployeeData([...employeeData, employee]);
           setEmployee({
            name: '',
            gender: '',
            contact: '',
            email: '',
            description: ''
        });
       }

    }
    const ResetEmployeeData = () => {
        setEmployee({
            name: '',
            gender: '',
            contact: '',
            email: '',
            description: ''
        });
    }
    return (
        <div className='Employee_form'>
            <h3>Please Enter Employee Data</h3>
            <label>Full Name :<br />
                <input type='text' value={employee.name} onChange={handleNameChange} />
            </label>
            {/* <div className='gender'>Gender :<br/>
                
                    <label>Male:<input type='radio' name='gender' value='Male' onChange={handleGenderChange} /></label>
                    <label>Female:<input type='radio' name='gender' value='Female' onChange={handleGenderChange} /></label>
                    <label>Other:<input type='radio' name='gender' value='Other' onChange={handleGenderChange} /></label>
                
            </div><br/> */}
            <label>Contact :<br />
                <input type='text' value={employee.contact} onChange={handleContactChange} />
            </label>
            <label>Email :<br />
                <input type='text' value={employee.email} onChange={handleEmailChange} />
            </label>
            <label>Description :<br />
                <input type='text' value={employee.description} onChange={handleDescriptionChange} />
            </label>
            <div>
                <Link to ='/' ><Button variant="success" onClick={SubmitEmployeeData} >Submit</Button></Link>
                <Button variant="info" onClick={ResetEmployeeData} >Reset</Button>
            </div>
        </div>
    )
}

export default EmployeeForm;