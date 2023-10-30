import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';


function Sidebar(){
    const hideSidebar = ()=>{
        document.getElementsByClassName('sidebar')[0].style.display = 'none';
    }
    return(
        <div className='sidebar'>
         <h3>Dashboard</h3><button onClick={hideSidebar}>x</button>
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