import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from './Login';
const NavBar = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();


  const handleNavigate = (route) => {
    if (!isAuthenticated && !isLoading) {
      // Redirect to login if the user is not authenticated
      navigate('/loginpage');
    } else {
      // Otherwise, navigate to the given route
      console.log("hey bhule bhatke");
      navigate(route);
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#F0F8FF', color: 'black' }}>
      <Toolbar style={{
        display: "flex",
        justifyContent: "space-between",
      }}>

        <Typography variant="h4" onClick={() => navigate('/')} style={{ fontWeight: "600", cursor: "pointer" }}>
          BookStore
        </Typography >
        <Button onClick={() => navigate('/')} variant="h6" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Home
        </Button >

        <Button onClick={() => handleNavigate('/books', isAuthenticated)} color="inherit" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Books
        </Button>
        <Button onClick={() => handleNavigate('/authors', isAuthenticated)} color="inherit" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Authors
        </Button>
        <Button onClick={() => handleNavigate('/cart', isAuthenticated)} color="inherit" onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}>
          Cart
        </Button>
        <LoginButton style={{ marginLeft: "8px", marginRight: "8px" }} />

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
