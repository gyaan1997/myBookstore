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
      <Toolbar style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Typography variant="h4" style={{ fontWeight: "600" }}>
        BookStore
        </Typography >
        <Button onClick={() => handleNavigate('/')} variant="h6" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Home
        </Button >

        <Button onClick={() => handleNavigate('/books')} color="inherit" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Books
        </Button>
        <Button onClick={() => handleNavigate('/authors')} color="inherit" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Authors
        </Button>
        <Button onClick={() => handleNavigate('/cart')} color="inherit" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Cart
        </Button>
       <LoginButton/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
