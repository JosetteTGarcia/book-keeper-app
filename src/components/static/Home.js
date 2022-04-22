import React, { useEffect, useState} from 'react'
import BookCard from '../books/BookCard';
import Filters from '../books/FilterandSearch'

//MainGrid/Container
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function Home({
  currentUser, 
  loggedIn, 
  books, 
  onEditBook}
  ){
  const [showAllBooks, setShowAllBooks] = useState(false)
  const [sortBy, setSortBy] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  
  



  const booksFiltered= books
    .filter(book => (showAllBooks ? book : book.completed === false ))
    .sort((book1 , book2) => {
      if (sortBy === "rating") {
        return book2.rating - book2.rating
      } else if (sortBy === "oldest"){
        return book2.dateStarted - book1.dateStarted;
      } else {
        return book1.dateStarted - book2.dateStarted;
      }
    })


 
    const finalBookList = booksFiltered.map((book) => (
      <Grid item xs={12} sm={6} md= {4} key={book.id}>
        <BookCard 
        key={book.id} 
        book={book} 
        onEditBook = {onEditBook}
        selectedBook={selectedBook}
        onSelectBook={setSelectedBook}
        /> 
      </Grid>
    ))
 


if(loggedIn) {
    return (
      <React.Fragment>
        <CssBaseline />
          <Container fixed>
            <Box sx={{ bgcolor: 'white', height: '10vh', flexGrow: 1}}>
              <h1>{currentUser.username}'s Home Page</h1>
            </Box>
            <Filters 
              sortBy={sortBy}
              onChangeSortBy={setSortBy}
              onChange={setShowAllBooks}
              showAllBooks={showAllBooks}
            />
          </Container>
        <Grid container spacing={2}>
          {finalBookList}
        </Grid>
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