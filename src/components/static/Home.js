import React, { useState} from 'react'
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
  onEditBook,
  onFilterChange,
  sortBy}
  ){
  const [showAllBooks, setShowAllBooks] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null);
  
  


//   useEffect(() => {
//     const sortedBooksList = books.sort((book1 , book2) => {
//     console.log("I'm in")
//     if (sortBy === "rating") {
//       console.log("hello, i'm rating")
//       return book2.rating - book2.rating;
//     } else if (sortBy === "oldest"){
//       console.log("hello, i'm oldest")
//       return book1.dateStarted - book2.dateStarted;
//     } else {
//       console.log("hello, i'm newest")
//       return book1.dateStarted - book2.dateStarted;
//     }
//   })
//   onFilterChange(sortedBooksList);
// },[sortBy])

  


 
    const finalBookList = books
      .filter(book => (showAllBooks ? book : book.completed === false ))
      .map((book) => (
      <Grid item xs={12} sm={6} md= {4} key={book.id}>
        <BookCard 
        key={book.id} 
        book={book} 
        onBookEdit = {onEditBook}
        selectedBook={selectedBook}
        onSelectBook={setSelectedBook}
        /> 
      </Grid>
    ))
  
 


if(loggedIn) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed sx={{ bgcolor: '#eeeae7', flexGrow: 1}}>
          <Container fixed>
            <Box sx={{ bgcolor: '#eeeae7', height: '10vh', flexGrow: 1}}>
              <h1>
              <span role="img" aria-label="books">📚</span>
                {currentUser.username}'s Library 
              <span role="img" aria-label="books">📚</span>
              </h1>
              {finalBookList !== null  ? 
              null :
              <p> Welcome! It looks like you do not have any current books in your library!<br/> To get started tracking, add a new book <a href="/books/new">here</a>!
              <br/> <br/>
              </p>
            }
            </Box>
            <Box fixed>
            <Filters 
              sortBy={sortBy}
              onChangeSortBy={onFilterChange}
              onChange={setShowAllBooks}
              showAllBooks={showAllBooks}
            />
            </Box>
          </Container>
          <Container fixed>
        <Grid container spacing={2}>
          {finalBookList}
        </Grid>
        </Container>
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