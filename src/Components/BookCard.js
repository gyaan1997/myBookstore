import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import LazyLoad from 'react-lazyload';


const BookCard = ({ book, onAddToCart }) => {
  const [isAdded, setAdded] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/bookdetail/${book.id}`);
  };
  const handleAddToCart = () => {
    onAddToCart(book);
    setAdded(true);

    // Reseting the button text after 2 sec
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <Card style={{ maxWidth: '250px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardContent style={{ padding: '10px', textAlign: 'center' }}>
        <LazyLoad height={200} offset={100}>
          <div onClick={handleNavigate}>
            <img
              src={book.coverImage}
              alt="coverpage"
              style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </LazyLoad>
        <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
          Price: ${book.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart} // Passing  the entire book object to onAddToCart
          disabled={isAdded}
          style={{ marginTop: '10px' }}
        >
          {isAdded ? 'Added' : 'Add to Cart'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;