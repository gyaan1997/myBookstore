import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mui/material";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };
  const menuItemStyle = {
    marginTop: '40px',

  };
  return (
    <div

    >
      {isAuthenticated ?
        (
          <>
            <Avatar onClick={handleClick}>
              {user.name.slice(0, 1).toUpperCase()}
            </Avatar>
            {anchorEl && (
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={menuItemStyle}
              >
                <MenuItem onClick={handleLogout} >Logout</MenuItem>
              </Menu>
            )}
          </>
        ) : (
          <button onClick={() => loginWithRedirect()} style={{
            backgroundColor: "rgba(100, 85, 200 )",
            borderRadius: "5px",
            fontSize: "17px",
            fontWeight: '500',
            padding: "6px 18px",
            color: 'white',
            cursor: "pointer"
          }}>Log In</button>
        )}
    </div>
  );
};

export default LoginButton;