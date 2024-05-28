import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ component: React.ComponentType }> = ({
  component: Component,
}) => {
  const userInfo = localStorage.getItem("userInfo");

  return userInfo ? <Component /> : <Navigate to="/register" />;
};

export default ProtectedRoute;
