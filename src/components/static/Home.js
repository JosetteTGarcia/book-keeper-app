import React, { useState, useEffect } from 'react'
import { baseURL } from '../../Globals';
import BookCard from '../books/BookCard';

//MainGrid/Container
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//Switch Button for "Show All Books"
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

//Filter Drop Down menu
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Home({currentUser, loggedIn}){
  const [showOnlyCurrentBooks, setshowOnlyCurrentBooks] = useState(true)
  const [bookData, setBookData] = useState([])
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value);
  };


  useEffect(() => {
    fetch(baseURL + '/books')
    .then(resp => resp.json())
    .then((data) => {
      if(showOnlyCurrentBooks){
        const userBooks = data.filter(book => (book.user_id === currentUser.id && !book.completed))
        setBookData(userBooks)
      } else {
        const userBooks = data.filter(book => book.user_id === currentUser.id)
        setBookData(userBooks);
      }
    })
  })
  
  const bookList = bookData.map((book) => (
      <Grid item xs={12} sm={6} md= {4} key={book.id}>
        <BookCard key={book.id} book={book}/> 
      </Grid>
  ))

  useEffect((bookData) => {
    if(filter === "rating"){
      const rankedBooks = bookData.sort((a , b) => a.rating - b.rating)
      setBookData(rankedBooks)
    }
  }, [filter])

  function handleSwitchClick(){
    setshowOnlyCurrentBooks(!showOnlyCurrentBooks)
  }

if(loggedIn) {
    return (
      <React.Fragment>
        <CssBaseline />
          <Container fixed>
            <Box sx={{ bgcolor: 'white', height: '10vh', flexGrow: 1}}>
              <h1>{currentUser.username}'s Home Page</h1>
            </Box>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Show All Books" onClick={handleSwitchClick}/>
            </FormGroup>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sory By</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={filter}
                label="filter"
                onChange={handleFilterChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="rating" >Rating: Highest - Lowest</MenuItem>
                <MenuItem value="newest" >Newest - Oldest</MenuItem>
                <MenuItem value="oldest">Oldest - Newest</MenuItem>
              </Select>
          </FormControl>
          </Container>
        <Grid container spacing={2}>
          {bookList}
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