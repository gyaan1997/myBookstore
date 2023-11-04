import React from "react";
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
    color: 'white',
    fontWeight: '900',
    // filter: 'blur(5px)',
    // WebkitFilter: 'blur(5px)',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.home}>
     
        <Typography variant="h1">Welcome to the Book Store</Typography>

      </div>
    </>
  );
};
export default Home;
