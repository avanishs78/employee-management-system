import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function EmployeeData({ employeeData,setEmployeeData }) {

    const SortByName =()=>{
        const SortedData = employeeData.sort(compare);
        setEmployeeData(SortedData);
        console.log('working');
    }
    function compare(a,b){
        if(a.name>b.name)
        return 1;
       if(a.name<b.name)
       return -1;
    return 0;
    }

    return (
        <div className='employee_data'>
            <h4 style={{margin:'0px',textAlign:'center'}}>Employee List</h4><br/>
            Sort By:<select  ><option>--select--</option>
                            <option onClick={SortByName} >Name</option>
                            <option>Age</option>
                  </select><br/><br/>
            <Table className="table-primary">
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Description/Job role</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((el, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.contact}</td>
                            <td>{el.email}</td>
                            <td>{el.description}</td>
                        </tr>
                    })}
                </tbody>
            </Table><br/>
            
            <Link to="employeeForm"><Button variant="primary">Add New Employee</Button></Link>
        </div>
    )
}
export default EmployeeData;