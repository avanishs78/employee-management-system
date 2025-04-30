import React,{ useState } from 'react';
import './../App.css';
import New_Emp_img from './../assets/New Employee Data.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Login(props) {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    const SubmitLoginDetails = () => {
       if(userName.trim()==='' && password.trim()==='') {
        setError('Please enter user name and password !!');
        return;
       }
       if(userName.trim()==='') {
        setError('Please enter user name !!');
        return;
       }
       if(password.trim()==='') {
        setError('Please enter your password !!');
        return;
       }
       if(userName!=='admin') {
        setError('User name is invalid !!');
        return
       }
       if(password!=='admin@123') {
        setError('Password is incorrect !!');
        return;
       }
       if(userName!=='admin' && password!=='admin@123') setError('User name and Password are incorrect !!');
    }
    const ResetEmployeeData = () => {
        setUserName('');
        setPassword('');
    }
    return (
        <div className='main_div'>
            <div className='Employee_form'>
                <h3>Please Enter login details</h3>
                <label>Username :
                    <input type='text' value={userName} onChange={handleUserNameChange} />
                </label>
                <br/>
                <label>Password :
                    <input type='password' value={password} onChange={handlePasswordChange} />
                </label>
                <div>
                {error? <span className='error'>{error}</span> :<span>Hint: Enter a valid login details</span>}
                </div>
                <div>
                    <Link to={!error && '/'} ><Button className='button' variant="success" onClick={SubmitLoginDetails} >Login</Button></Link>
                    <Button className='button' variant="info" onClick={ResetEmployeeData} >Reset</Button>
                </div>
                
            </div>
          
                <img className='emp_image' src={New_Emp_img} alt='employee_management'></img>
            
        </div>
    )
}

export default Login;