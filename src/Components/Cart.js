// Cart.js
import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useCart } from '../Context'; 
const Cart = () => {
  const { cartItems } = useCart(); 
  console.log('Cart items:', cartItems);
  return (
    <div>
      <Typography variant="h4">Shopping Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography variant="subtitle1">Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.title}
                secondary={`Price: $${item.price}`} // Assuming price is a number
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Cart;
