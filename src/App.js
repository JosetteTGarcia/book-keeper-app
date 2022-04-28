import React, {useState, useEffect, useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {baseURL} from './Globals.js';
import Home from './components/static/Home'
import Signup from './components/sessions/Signup'
import Login from './components/sessions/Login'
import BookForm from './components/books/BookForm'
import NavBar from './components/navigation/NavBar'
import './App.css';

function App() {

  //setState for currentUser, loggedIn, bookData, sortBy
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [bookData, setBookData] = useState([])
  const [sortBy, setSortBy] = useState("");
  
  
  /* 
  FETCH DATA 
  */
  
// Step 3:
//books books as longer as user id matches userID
//sets bookData again 
  const fetchBooks = useCallback(user => {
    fetch(baseURL + '/books')
    .then(resp => resp.json())
    .then(data => {
      const userBooks = data.filter(book => book.user_id === user.id);
      setBookData(userBooks)
    })
  }, [setBookData])


 /* 
  SET/LOGIN USER
*/
  
  //Step 2: 
  //sets users, sets logged in status, sets local storage, calls fetchbooks to get book data
  const loginUser = useCallback(user => {
    setCurrentUser(user);
    setLoggedIn(true)
    localStorage.setItem('user_id', user.id); //logn if needing log out > remove item
    fetchBooks(user);
  }, [fetchBooks])

  //User Logout
  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false)
    localStorage.removeItem('user_id');
  }

  //Step 1:
  //On Login In: This pulls the data from the user
  //retrieve local storage of loggedin user and pull data for this user
  //call login user 
  useEffect(() => {
    const userID = localStorage.getItem('user_id');
    if(userID && !loggedIn){
      fetch(baseURL + '/users/' + userID)
      .then(resp => resp.json())
      .then(data => loginUser(data))
    }
  },[loggedIn, loginUser])


  /* 
  FORM CHANGES
*/
  //show new books on the component
  const addBook = book => {
    // adds the book to the state
    setBookData([...bookData, book])
  }

   /* 
  remaps the bookData and if the updated book ID matches, 
  show the new book edits vs. old
  reset book data to rerender component
  */
  function handleEditBook(updatedBook) {
    const updatedBooks = bookData.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBookData(updatedBooks);
  }


   /* 
  SORT CHANGES
  */

  // This useEffect calls on SortBy change so it can reset BookData
  // Needed to reset bookData so it can rerender components on the sort
  //recalls main useEffect
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
          <Route path="/books/new" element={<BookForm currentUser={currentUser} addBook={addBook} loggedIn={loggedIn} />}  />
        </Routes>
      </Router>
    
  );
}

export default App;
