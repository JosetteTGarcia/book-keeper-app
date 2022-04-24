import React from 'react'
import Typography from '@mui/material/Typography';


function ExtraBookInfo({ book }) {
  
  return (
    <>
    {(book.completed) ?  
      <>
       <Typography variant="body2" color="text.secondary">
        Date Started: <br/>
        {book.dateStarted}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Date Completed: <br/>
        {book.dateCompleted}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Notes: <br/>
          {book.comments}
        </Typography>
    </>
    : 
    
    <> Book is not completed! No further details available. </> }
</>
  )
}

export default ExtraBookInfo;