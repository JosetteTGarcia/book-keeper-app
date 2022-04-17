import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({loggedIn, logoutUser}){

  const logout = e => {
    e.preventDefault()
    logoutUser()
  }
  const loggedInLinks = () => {
    return (
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/books"> All Books </Link></li>
        <li><Link to="/books/new"> Add New Book </Link></li>
        <li><a href="#" onClick={logout}> Logout </a></li>
      </ul>
    )
  }

  const loggedOutLinks = () => {
    return (
      <ul>
        <li><Link to="/signup"> Create Account </Link></li>
        <li><Link to="/login"> Login </Link></li>
      </ul>
    )
  }
  
  return (
    <div>
      <h3>Book Keeper App</h3>
      { loggedIn ? loggedInLinks() : loggedOutLinks()}
    </div>
  )

}

export default NavBar;