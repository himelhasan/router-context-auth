import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext, { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h2>L O A D I N G</h2>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login">Please Login</Navigate>;
};

export default PrivateRoute;
