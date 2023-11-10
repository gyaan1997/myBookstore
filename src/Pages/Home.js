import React from "react";
// import backgroundImage from "../Images/bgimage2.jpeg";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import LazyLoad from 'react-lazyload';
import Signup from "../Components/Signup";
const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: 'white',
    fontWeight: '900',
    overflow: 'hidden',
    boxSizing: 'border-box',

  },
}));

const Home = () => {
  const classes = useStyles();
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className={classes.home}>
        <LazyLoad height={100} offset={50}>
          {isAuthenticated ?
            <Typography variant="h1">Welcome to the Book Store {user.name.slice(0, 5).toUpperCase()} </Typography>
            : <><Typography variant="h1">Welcome to the Home Page</Typography>
              <Typography variant="h4" >Please Sign up to explore more</Typography>
              <Signup />
            </>
          }
        </LazyLoad>

      </div>
    </>
  );
};
export default Home;
