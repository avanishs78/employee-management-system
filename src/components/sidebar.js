import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Sidebar({isOpen,hideSidebar}){
   
    return(
        <div className={isOpen?'sidebar':'sidebar_close'}>
         <h3>Dashboard</h3>
            <ul >
                <li><Link to='/' >Home</Link></li>
                <li>About</li>
                <li>Contact</li>
                <li>Career</li>
                <Link to='/login' ><Button variant='danger'>Sign out</Button></Link>
            </ul>
        </div>
    )
}

export default Sidebar;