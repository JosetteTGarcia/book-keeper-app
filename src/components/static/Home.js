import React, { useState, useEffect } from 'react'
import { baseURL } from '../../Globals';
import BookCard from '../books/BookCard';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Home({currentUser, loggedIn}){
  
  const [bookData, setBookData] = useState([])
  useEffect(() => {
    fetch(baseURL + '/books')
    .then(resp => resp.json())
    .then((data) => {
      const userBooks = data.filter(book => book.user_id === currentUser.id)
      setBookData(userBooks)})
  }, [])
  
  const bookList = bookData.map((book) => (
    <BookCard key={book.id} book={book}/> 
  ))

if(loggedIn) {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Box sx={{ bgcolor: 'white', height: '100vh'}}>
      <h1>{currentUser.username}'s Home Page</h1>
      <Box sx={{ bgcolor: 'white', height: '100vh'}}>
      {bookList}
      </Box>
      </Box>
      </Container>
      </React.Fragment>
    )
  } else {
    return (

      <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: 'white', height: '100vh'}}>
        <h1>
        Welcome to Book Keeper!
        </h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <p>
        If you have an account, please log in. If you are new to Book Keeper, please make an account to get started!
        </p>
        </Box>
        </Box>
      </Container>
    </React.Fragment>
    )
  }
}


export default Home;

//using HOME page to display all CURRENT reads, including Filter for "All Books to view" 
//instead of using separate page for it 