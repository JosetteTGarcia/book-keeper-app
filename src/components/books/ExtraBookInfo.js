import React from 'react'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function ExtraBookInfo({ book }) {
  
  return (
    <>
    {(book.completed) ?  
      <>
        <Typography variant="body2" color="text.secondary">
          {book.dateCompleted}
        </Typography>
        <Rating
              type="number"
              name="rating"
              value={book.rating}
              id="rating"
            />
        <Typography variant="body2" color="text.secondary">
          {book.comments}
        </Typography>
    </>
    : 
    
    <> Book is not completed! No further details available. </> }
</>
  )
}

export default ExtraBookInfo;