import React, { useState, useEffect } from 'react'
import { baseURL } from '../../Globals';
import BookCard from '../books/BookCard';


function Home({currentUser, loggedIn}){
  
  const [bookData, setBookData] = useState([])
  useEffect(() => {
    fetch(baseURL + '/books')
    .then(resp => resp.json())
    .then((data) => setBookData(data))
  }, [])
  
  const bookList = bookData.map((book) => (
    <BookCard key={book.id} book={book}/> 
  ))

if(loggedIn) {
    return (
    <div>
      <h1>{currentUser.username}'s Home Page</h1>
      {bookList}
    </div>)
  } else {
    return (
    <div>
      <h1>
        Welcome to Book Keeper!
      </h1>
      <p>
      If you have an account, please log in. If you are new to Book Keeper, please make an account to get started!
      </p>
    </div>
    )
  }
}


export default Home;

//using HOME page to display all CURRENT reads, including Filter for "All Books to view" 
//instead of using separate page for it 