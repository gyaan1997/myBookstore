import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div

    >
      {isAuthenticated ? (
        <button onClick={() => logout()} style={{
          backgroundColor: "#04AA6D",
          borderRadius: "5px",
          fontSize: "17px",
          fontWeight: '600',
          padding: "6px 18px",
          color: 'white',
          cursor:"pointer"
        }}>Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()} style={{
          backgroundColor: "#04AA6D",
          borderRadius: "5px",
          fontSize: "17px",
          fontWeight: '600',
          padding: "6px 18px",
          color: 'white',
          cursor:"pointer"
        }}>Log In</button>
      )}
    </div>
  );
};

export default LoginButton;
