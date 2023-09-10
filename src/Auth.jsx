import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
  {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Complete Sign Up</button>}
  {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
  
    </>
  )

};

export default LoginButton;