import React from "react";
import backgroundImage from "../Images/banner1.jpg";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "120vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: 'rgb(242, 242, 242)',
    fontWeight: '900',
    // filter: 'blur(5px)',
    // WebkitFilter: 'blur(5px)',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className={classes.home}>

        {/* <Typography variant="h1">Welcome to the Book Store</Typography> */}
        {isAuthenticated ?
          <Typography variant="h1">Welcome to the Book Store {user.name.slice(0, 5).toUpperCase()} </Typography>
          : <Typography variant="h1">Welcome to the SignUp Page</Typography>
        }

      </div>
    </>
  );
};
export default Home;
