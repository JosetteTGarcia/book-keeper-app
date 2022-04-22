import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {baseURL} from './Globals.js';
import Home from './components/static/Home'
import Signup from './components/sessions/Signup'
import Login from './components/sessions/Login'
import BookForm from './components/books/BookForm'
import NavBar from './components/navigation/NavBar'
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [bookData, setBookData] = useState([])


  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true)
    localStorage.setItem('user_id', user.id); //logn if needing log out > remove item
    fetchBooks(user);
  }
  
  const fetchBooks = user => {
    fetch(baseURL + '/books')
    .then(resp => resp.json())
    .then(data => {
      const userBooks = data.filter(book => book.user_id === user.id);
      setBookData(userBooks)
      console.log(userBooks)
    })
  }



  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false)
    localStorage.removeItem('user_id');
  }

  //retrieve local storage of loggedin user and pull data for this user
  useEffect(() => {
    const userID = localStorage.getItem('user_id');
    if(userID && !loggedIn){
      fetch(baseURL + '/users/' + userID)
      .then(resp => resp.json())
      .then(data => loginUser(data))
    }
  },[loggedIn])

  return (
      <Router>
        <NavBar loggedIn={loggedIn} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser}  loggedIn={loggedIn} books={bookData}/>} />
          <Route path="/signup" element={<Signup loginUser={loginUser} />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          { /* MAY NOT USE: <Route path="/books" element={<BookList />} /> */} 
          <Route path="/books/new" element={<BookForm currentUser={currentUser} loggedIn={loggedIn} />}  />
        </Routes>
      </Router>
    
  );
}

export default App;
