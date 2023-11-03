import React from 'react'
import dummyData from '../Configs/dummyData';
import NavBar from '../Components/Navbar';
import backgroundImage from '../Images/banner1.jpg';

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    // width:'100%',
    height: '100vh',
  }}))

const Home = () => {
    const classes=useStyles();
    console.log(dummyData)
  return (
    <div className={classes.home}> 
        <NavBar/>
        <h1>Welcome to the Book Store</h1>
    </div>
  )
}
export default Home;