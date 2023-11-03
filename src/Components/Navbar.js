import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#F0F8FF', 
    color:"black"
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    // marginRight: theme.spacing(2),
    // color: '#ECF0F1', // Set your desired text color for the buttons
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Home</Typography>
        <div>
          <Button className={classes.button} onClick={() => handleNavigate('/books')}>
            Books
          </Button>
          <Button className={classes.button} onClick={() => handleNavigate('/authors')}>
            Authors
          </Button>
          <Button className={classes.button} onClick={() => handleNavigate('/cart')}>
            Cart
          </Button>
          <Button className={classes.button} onClick={() => handleNavigate('/login')}>
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
