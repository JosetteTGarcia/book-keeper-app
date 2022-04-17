# Overview
This app is for book lovers! Users can track the books they are reading, rate them, & leave comments. Great way to keep track of reading goals and recall of your favorites. 

### MVP

- Signup/ Login
- Creating a book that you're reading
- Listing the books

### REQUIREMENTS
 * You must have 5 components
  1. Home
  2. Navigation
  3. SignUp
  4. Login
  5. BookList
  6. BookCard
  7. AddBookForm
  8. Search Bar
  9. Filter Option


* You must have 3 client side routes
  1.  / - Home Component
  2. /signup - Signup
  3. /login -Login
  4. /books/new - BookForm 
  5. /books - BookList (All Component)



### STRECH GOALS
- Search for new book recs from outside API
- Tracker for how many books you've read in a year

### Data
{
  "users":[
    {
      "id": 1,
      "username": "Bob",
    }
  ],
  "books":[
    {
      "id": 1,
      "user_id": 1,
      "title": "East of Eden",
      "author": "John Steinbeck",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/East_of_Eden_%281952_1st_ed_dust_jacket%29.jpg/800px-East_of_Eden_%281952_1st_ed_dust_jacket%29.jpg",
      "completed": true,
      "dateStarted": "date",
      "dateCompleted": "date2",
      "starReview": "stars",
      "comments": "comments"
    }
  ]
}