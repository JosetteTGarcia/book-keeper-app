import React, {useState} from 'react';
import ExtraBookInfo from './ExtraBookInfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function BookCard({book}){

  const [isHidden, setIsHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function handleMainCardClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }
  
  if (isHidden) return null;

  return (
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
      <Button size="small" color="primary">
        Edit
      </Button>

      {(book.completed) ? null : <>
      <Button size="small" color="primary">
        Complete
      </Button>
      </>}
      
    </CardActions>
  </Card>
  )

}

export default BookCard;