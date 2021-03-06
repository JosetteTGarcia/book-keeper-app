import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { baseURL } from '../../Globals';

function BookForm({currentUser, loggedIn, addBook}){
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    user_id: 0,
    title: "",
    author: "",
    image: "",
    completed: false,
    dateStarted: "",
    dateCompleted: "",
    rating: 0,
    comments: ""
  })

//sets userID for any form submissions so it connects to the right user
  useEffect(() => {
    if(loggedIn) { 
      setFormData({
        ...formData,
        user_id: currentUser.id 
      })
    }
  }, [currentUser, loggedIn])

  //On change, setting the correct states for the form
  function handleChange(e){
     if(e.target.name === "completed"){
      setFormData({
        ...formData,
          completed: !formData.completed
      }) 
    } else if(e.target.name === "rating"){
      setFormData({
        ...formData,
          rating: parseInt(e.target.value)
      })
    } else {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }
     }
    
    
//On submit, post the form data
  function handleSubmit(e){
    e.preventDefault();
    fetch(baseURL + "/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      addBook(data)
      navigate("/")
      console.log(data)
    })
  }
  



  return (
    <div>
      <h1> Add a New Book to Your List</h1>
<Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="standard-multiline-flexible"
          name="title"
          label="Title"
          multiline
          maxRows={4}
          value={formData.title}
          onChange={handleChange}
          variant="standard"
        /> 
        <TextField
          id="standard-multiline-flexible"
          label="Author"
          name="author"
          multiline
          maxRows={4}
          value={formData.author}
          onChange={handleChange}
          variant="standard"
        /> <br />
        <TextField
          id="standard-multiline-flexible"
          label="Cover Image - URL"
          name="image"
          multiline
          maxRows={4}
          value={formData.image}
          onChange={handleChange}
          variant="standard"
        />  <br />
        <TextField
          id="standard-multiline-flexible"
          label="Date Started (YYYY-MM-DD)"
          name="dateStarted"
          multiline
          maxRows={4}
          value={formData.dateStarted}
          onChange={handleChange}
          variant="standard"
        /> <br />
        <label> Finished reading? (Check if yes, continue to submition if no!)
        <Checkbox 
          id="completed"
          name="completed"
          value={formData.completed}
          label="Completed Book?" 
          onChange={handleChange}
        /> 
        </label> <br />
        </div>

        { formData.completed ? 
        <div>
        <TextField
          id="standard-multiline-flexible"
          label="Date Completed (YYYY-MM-DD)"
          name="dateCompleted"
          multiline
          maxRows={4}
          value={formData.dateCompleted}
          onChange={handleChange}
          variant="standard"
        /> <br />
        <label>
          Rating: 
        <Rating
          type="number"
          name="rating"
          value={formData.rating}
          id="rating"
          onChange={(handleChange)}
        /> </label> <br />
        <TextField
          id="standard-multiline-flexible"
          label="Comments/Notes"
          name="comments"
          multiline
          maxRows={7}
          value={formData.comments}
          onChange={handleChange}
          variant="standard"
        />
        </div>
        : 
        null}
        
        <input type="submit" value="Submit" />
    </Box>
    </div>
  )

}

export default BookForm;



