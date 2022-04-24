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
  const [sortBy, setSortBy] = useState("");
  


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
  },[loggedIn, bookData])

  function handleEditBook(updatedBook) {
    const updatedBooks = bookData.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBookData(updatedBooks);
  }

  useEffect(() => {
    const sortedBooksList = [...bookData].sort((book1 , book2) => {
    console.log("I'm in")
    if (sortBy === "rating") {
      console.log("hello, i'm rating")
      return book2.rating - book1.rating;
    } else if (sortBy === "oldest"){
      console.log("hello, i'm oldest")
      return new Date(book1.dateStarted) - new Date(book2.dateStarted);
    } else {
      console.log("hello, i'm newest")
      return new Date(book2.dateStarted) - new Date(book1.dateStarted);
    }
  })
  setBookData(sortedBooksList)
},[sortBy])



  return (
      <Router>
        <NavBar loggedIn={loggedIn} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" 
            element={<Home 
            currentUser={currentUser}  
            loggedIn={loggedIn} 
            books={bookData}
            sortBy={sortBy}
            onFilterChange={setSortBy}
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
