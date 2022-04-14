import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  
  
  return (
    <div>
     <ul> 
       <li><Link to="/"> Home </Link></li>
       <li><Link to="/signup"> Create Account </Link></li>
       <li><Link to="/login"> Login </Link></li>
       <li><Link to="/books"> All Books </Link></li>
       <li><Link to="/books/new"> Add New Book </Link></li>
       <li>Logout</li>
     </ul>
    </div>
  )

}

export default NavBar;