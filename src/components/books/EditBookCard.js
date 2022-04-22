import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button} from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

function EditBookCard({book, onChangeForm, onBookEdit}){



  function handleCompletedChange(event){
    onChangeForm(event.target.name, event.target.value === !book.completed)
      
  }
    
  function handleRatingChange(event){
    onChangeForm(event.target.name, parseInt(event.target.value))
  }
  
  function handleChange(event){
    onChangeForm(event.target.name, event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((r) => r.json())
      .then(onBookEdit);
  }
  


  return (
    <Card sx={{ maxWidth: 200}}>
      <CardMedia
        component="img"
        height="300"
        image={book.image}
        alt="cover image"
      />
      <CardContent>
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
          defaultValue={book.title}
          onChange={handleChange}
          variant="standard"
        /> 
        <TextField
          id="standard-multiline-flexible"
          label="Author"
          name="author"
          multiline
          maxRows={4}
          defaultValue={book.author}
          onChange={handleChange}
          variant="standard"
        /> <br />
        <TextField
          id="standard-multiline-flexible"
          label="Cover Image - URL"
          name="image"
          multiline
          maxRows={4}
          defaultValue={book.image}
          onChange={handleChange}
          variant="standard"
        />  <br />
        <TextField
          id="standard-multiline-flexible"
          label="Date Started (YYYY-MM-DD)"
          name="dateStarted"
          multiline
          maxRows={4}
          defaultValue={book.dateStarted}
          onChange={handleChange}
          variant="standard"
        /> <br />
        <label> Completed?
        <Checkbox 
          id="completed"
          name="completed"
          defaultValue={book.completed}
          label="Completed Book?" 
          onChange={handleCompletedChange}
        /> 
        </label> <br />
        </div>

        <TextField
          id="standard-multiline-flexible"
          label="Date Completed (YYYY-MM-DD)"
          name="dateCompleted"
          multiline
          maxRows={4}
          defaultValue={book.dateCompleted}
          onChange={handleChange}
          variant="standard"
        /> <br />
        <label>
          Rating: 
        <Rating
          type="number"
          name="rating"
          value={book.rating}
          id="rating"
          onChange={handleRatingChange}
        /> </label> <br />
        <TextField
          id="standard-multiline-flexible"
          label="Comments/Notes"
          name="comments"
          multiline
          maxRows={7}
          defaultValue={book.comments}
          onChange={handleChange}
          variant="standard"
        />

<Button 
        size="small" 
        color="primary" 
        type="submit" value="Submit"
      >
        Complete Edits
      </Button>
    </Box>
      </CardContent>
  </Card>
  )
}
  export default EditBookCard;
