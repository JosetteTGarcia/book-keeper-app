import React, {useState} from 'react';
import ExtraBookInfo from './ExtraBookInfo';
import EditBookCard from './EditBookCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material';
import { Link } from 'react-router-dom';



function BookCard({book}){

  const [showDetails, setShowDetails] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editBook, setEditBook] = useState(false)

  function handleEditForm(name, value) {
    setSelectedBook({
      ...selectedBook,
      [name]: value,
    });
  }

  function handleMainCardClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }
  
  function handleClick(){
    setSelectedBook(book);
    setEditBook(!editBook)
  }


  

  return (
 <> 
  {!editBook ? 
  
    <Card sx={{ maxWidth: 200}}>
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
    <Typography variant="body2" color="text.secondary">
      {book.author}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {(book.completed) ? <>Completed </>: <>Currently Reading </>}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {book.dateStarted}
    </Typography>
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

  <EditBookCard book={selectedBook} onChangeForm={handleEditForm}/> }

</>
)

}

export default BookCard;