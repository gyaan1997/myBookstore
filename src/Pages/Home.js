import React from "react";
import dummyData from "../Configs/dummyData";
import NavBar from "../Components/Navbar";
import backgroundImage from "../Images/banner1.jpg";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  console.log(dummyData);
  return (
    <>
      {/* <NavBar /> */}
      <div className={classes.home}>
     
      <Typography variant="h2" >Welcome to the Book Store</Typography>

      </div>
    </>
  );
};
export default Home;
