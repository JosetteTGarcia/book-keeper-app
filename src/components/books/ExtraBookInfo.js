import React from 'react'
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function ExtraBookInfo({ book }) {
  
  return (
    <>
    {(book.completed) ?  
      <>
       <Typography variant="body2" color="text.secondary">
        Date Started: {book.dateStarted}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Date Completed: {book.dateCompleted}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Notes: {book.comments}
        </Typography>
    </>
    : 
    
    <> Book is not completed! No further details available. </> }
</>
  )
}

export default ExtraBookInfo;