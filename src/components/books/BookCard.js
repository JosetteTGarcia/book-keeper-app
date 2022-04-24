import React, { useState} from 'react';
import ExtraBookInfo from './ExtraBookInfo';
import EditBookCard from './EditBookCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Button, CardActionArea, CardActions} from '@mui/material';



function BookCard({
  book, 
  onBookEdit, 
  selectedBook, 
  onSelectBook,
})
{
  const [showDetails, setShowDetails] = useState(false);
  const [editBook, setEditBook] = useState(false)
 


  function handleMainCardClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }
  

  const handleClick = () => {
    onSelectBook(book)
    setEditBook(!editBook)
  }

 
  function handleEditForm(name, value) {
    onSelectBook({
      ...selectedBook,
      [name]: value,
    });
  }

  function convertFirstLetterToUpperCase(str) {
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
   
    return splitStr.join(' '); 
 }

  return (
 <> 
  {!editBook ? 
  
    <Card sx={{ maxWidth: 200}} variant="outlined">
    <CardActionArea onClick={handleMainCardClick}>
      <CardMedia
        component="img"
        height="300"
        image={book.image}
        alt="cover image"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {book.title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {book.author}
    </Typography>
    <Typography variant="body2" color={(book.completed) ? "green": "#ff4d4d"}>
      {(book.completed) ? <>Completed </>: <>Currently Reading </>}
    </Typography>
    {(book.completed) ? <>
          <Rating
              type="number"
              name="rating"
              value={book.rating}
              id="rating"
            /> </>
            : null}
    {showDetails ? <ExtraBookInfo book={book} /> : null}
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button 
        size="small" 
        color="primary" 
        onClick={handleClick}
      >
        Edit/Complete
      </Button>
      
    </CardActions>
  </Card> 
: 

  <EditBookCard book={selectedBook} onChangeForm={handleEditForm} onBookEdit={onBookEdit} onComplete={setEditBook}/> }

</>
)

}

export default BookCard;