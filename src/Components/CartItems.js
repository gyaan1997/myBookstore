import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="subtitle1">Your cart is empty.</Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item.id} style={{ margin: '10px', maxWidth: '250px' }}>
            <CardContent>
              <img
                src={item.coverImage}
                alt="coverpage"
                style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1">Author: {item.author}</Typography>
              <Typography variant="subtitle1">Genre: {item.genre}</Typography>
              <Typography variant="subtitle2">Description: {item.description}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default Cart;
