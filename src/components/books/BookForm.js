import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { baseURL } from '../../Globals';

function BookForm({currentUser, loggedIn}){
  
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

  useEffect(() => {
    if(loggedIn) {
      setFormData({
        ...formData,
        user_id: currentUser.id 
      })
    }
  }, [currentUser, loggedIn])

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
    .then(data => console.log(data))
  }
  



  return (
    <div>
      <h1> Add a New Book to Your List:</h1>
      <form onSubmit={handleSubmit}>

        <label>
          Title:
          <input type="text" name="title" id="name" value={formData.title} onChange={handleChange}/>
        </label> <br/>

        <label>
          Author:
          <input type="text" name="author" id="author" value={formData.author} onChange={handleChange}/>
        </label> <br/>

        <label>
          Add Cover Image (URL):
          <input type="text" name="image" id="image" value={formData.image} onChange={handleChange}/>
        </label> <br/>

        <label>
          Date Started:
          <input type="date" name="dateStarted" id="startedDate" value={formData.dateStarted} onChange={handleChange}/>
        </label> <br/>

        <label>
        Finished reading? (Check if yes, continue to submition if no!)
        <input type="checkbox" name="completed" id="completed" value={formData.completed} onChange={handleChange}/>
        </label> <br/>
       
       
       { formData.completed ? 
       <>
        <label>
          Date Completed:
          <input type="date" name="dateCompleted" id="dateCompleted" value={formData.dateCompleted} onChange={handleChange}/>
        </label> <br/>

        <label>
          Rating: 
        <Rating
          type="number"
          name="rating"
          value={formData.rating}
          id="rating"
          onChange={(handleChange)}
        /> </label> <br/>

        <label>
          Review/Comments:
          <input type="text" name="comments" id="comments" value={formData.comments} onChange={handleChange}/>
        </label> <br/> </>
        : null}
        
        <input type="submit" value="Submit" />
    </form>
    </div>
  )

}

export default BookForm;

// "id": 1,
// "user_id": 1,
// "title": "East of Eden",
// "author": "John Steinbeck",
// "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/East_of_Eden_%281952_1st_ed_dust_jacket%29.jpg/800px-East_of_Eden_%281952_1st_ed_dust_jacket%29.jpg",
// "completed": true,
// "dateStarted": "date",
// "dateCompleted": "date2",
// "starReview": "stars",
// "comments": "comments"