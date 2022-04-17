import React, {useState} from 'react'

function BookForm(){
  
  const [formData, setFormData] = useState({
    "title": "",
    "author": "",
    "image": "",
    "completed": true,
    "dateStarted": "",
    "dateCompleted": "",
    "starReview": true,
    "comments": ""
  })
  function addNewBookData(e){
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div>
      <h1> Add a New Book to Your List:</h1>
      <form onSubmit={addNewBookData}>
        <label>
          Title:
          <input type="text" name="title" />
        </label> <br/>
        <label>
          Author:
          <input type="text" name="author" />
        </label> <br/>
        <label>
          Add Cover Image (URL):
          <input type="text" name="image"/>
        </label> <br/>
        <label>
          Date Started:
          <input type="date" name="dateStarted" />
        </label> <br/>
        <label>
          Finished reading? (Check if yes, continue to submition if no!)
          <input type="checkbox" name="completed" />
        </label> <br/>
        <label>
          Date Completed:
          <input type="date" name="dateCompleted" />
        </label> <br/>
        <label>
          Rating:
          <input type="checkbox" name="rating" />
        </label> <br/>
        <label>
          Review/Comments:
          <input type="text" name="comments" />
        </label> <br/>
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