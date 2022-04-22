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

  function handleEditBook(updatedBook) {
    const updatedBooks = bookData.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBookData(updatedBooks);
  }



  return (
      <Router>
        <NavBar loggedIn={loggedIn} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" 
            element={<Home 
            currentUser={currentUser}  
            loggedIn={loggedIn} 
            books={bookData}
            onEditBook = {handleEditBook}
            />} 
          />
          <Route path="/signup" element={<Signup loginUser={loginUser} />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/books/new" element={<BookForm currentUser={currentUser} loggedIn={loggedIn} />}  />
        </Routes>
      </Router>
    
  );
}

export default App;
