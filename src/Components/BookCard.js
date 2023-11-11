import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import LazyLoad from 'react-lazyload';


const BookCard = ({ book, onAddToCart }) => {
  const [isAdded, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/bookdetail/${book.id}`);
  };

  const handleAddToCart = () => {
    onAddToCart(book, quantity); // Passing the book with the selected quantity
    setAdded(true);
    // Resetting the button text after 2 sec
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
        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">Qt:</Typography>
          <Select
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            renderValue={(value) => (value ? value : "0")}
            style={{ flex: 1, marginLeft: '8px', fontSize: '0.8rem', padding: '4px' }}
          >
            {[...Array(10)].map((_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            disabled={isAdded}
            style={{ marginLeft: '8px' }}
          >
            {isAdded ? 'Added' : 'Add to Cart'}
          </Button>
        </div>

      </CardContent>
    </Card>
  );
};

export default BookCard;