import React, { useState } from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';


function Sidebar({isOpen,hideSidebar}){
   
    return(
        <div className={isOpen?'sidebar':'sidebar_close'}>
         <h3>Dashboard</h3>
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Career</li>
                <Button variant='danger'>Sign out</Button>
            </ul>
        </div>
    )
}

export default Sidebar;