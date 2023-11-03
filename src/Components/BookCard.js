import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BookCard = ({ book, onAddToCart }) => {
  return (
    <Card style={{ margin: '10px', minWidth: '250px' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;