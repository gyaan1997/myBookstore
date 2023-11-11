// Cart.js
import React from 'react';
import { Typography, List, ListItem, ListItemText, IconButton, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../Context';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  console.log("cartitems" + cartItems)
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <Card style={{ maxWidth: '600px', margin: 'auto', marginTop: '20px', padding: '10px' }}>
      <CardContent>
        <Typography variant="h4">Shopping Cart</Typography>
        {cartItems.length === 0 ? (
          <Typography variant="subtitle1">Your cart is empty.</Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.title}
                  secondary={`Price: $${item.price.toFixed(2)} Quantity: ${item.quantity || 1}`}
                />
                <IconButton onClick={() => removeFromCart(item.id)} aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
        {cartItems.length > 0 && (
          <Typography variant="h6" style={{ marginTop: '10px' }}>
            Total Amount: ${getTotalAmount().toFixed(2)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Cart;
