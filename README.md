## The Book Keeper App

>The personal digital library 

## App Philosophy

This app is inspired by [GoodReads] (https://www.goodreads.com/). As an avid reader, I often find that the most challenging part is keeping track of all of the books I've read and what my opinion was on them. Any hobbyist will enjoy discussing and tracking their progress through their pojects. With reading, it may become a challenge the more you read and the longer time passes between your favorites. 

This app aims to absolve readers of the burden of remembering all of their completed books and quickly recall their favorites to recommend and discuss with others. With this app, you can track, rate and review your in progress and completed reads. Next time someone asked what your favorite book of the year was, you can quickly recall the details and enjoy your conversation. 


## Features
- Users can create an account with username to separate their library from others (password currently not required)
- Can add a new or completed book using the `Add New Book` form
- On the `Home Page`, you can review your in progress reads
  - "Complete" the book when you have finished your book
- Toggle to `Show All` in order to review all of the books in your Library
- Use the drop down to sory by Top Rated or Date Started
- Edit the details of any book whether completed or in progress

## How to Use
1. On initial render, a user will be asked to `Log in` or `Create Account` using the navigation links at the top
  - Note: Sign Up & Login does not ask for password
    > ![image](/GIFS/Login%3Asignup.gif)
2. On successful login or sign up, you will be directed to the `Home Page`.
   If you are new to the app, you will be instructed to add your first book through the `Add New Book` link in navigation
4. `Add New Book` will ask for the following initial informtion about the book being added:
  - `Title`
  - `Author`
  - `Cover Image`: This section will require a URL to the image
  - `Date Started`: `YYYY-MM-DD` format
  - `Completed`: Check off the box if your book has already been completed
    - If completed, the following additional fields appear:
      - `Date Completed`: `YYYY-MM-DD` format
      - `Rating`: 1-5 Star Rating
      - `Comments/Notes`: Where a user can leave feedback about the book
  > ![image](/GIFS/bookform.mp4-low.gif)
5. On Submit, a card for the newly added book is created and the user is directed back to the Home Page where they can review their In Progress books
  > ![image](/GIFS/submitbookform.gif)
7. To review All Books, rgardless of status, toggle the `All Books` switch
  > ![image](/GIFS/showall.gif)
8. To sort by rating, use the drop down menu to select from the following sort options
  - `Rating`: Will sort high - low
  - `Newest - Oldest`: Sorted based on Date Started input
  - `Oldest - Newest`: Sorted based on Date Started input
  > ![image](/GIFS/Filters.mp4-low.gif)
9. User can Edit & Complete a book using the `Edit/Complete` button on each card which will display a new form to edit the details and compeletion status of a book
  > ![image](/GIFS/EditBook.mp4-low.gif)
10. To review the Notes and Dates of a book, simpy click the upper section of a book card to display further details (Additional Details only available when book is completed)


## Technologies Used

This web app was made using:
- [Material UI](https://materializecss.com/) 
- React
- Javascript 
- CSS
- Local JSON server

