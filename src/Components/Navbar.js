import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginButton from './Login';
const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#F0F8FF', color: 'black' }}>
      <Toolbar>
        <Typography variant="h6" >
        BookStore
        </Typography >
        <Button onClick={() => handleNavigate('/')} variant="h6" >
          Home
        </Button >

        <Button onClick={() => handleNavigate('/books')} color="inherit">
          Books
        </Button>
        <Button onClick={() => handleNavigate('/authors')} color="inherit">
          Authors
        </Button>
        <Button onClick={() => handleNavigate('/cart')} color="inherit">
          Cart
        </Button>
       <LoginButton/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
