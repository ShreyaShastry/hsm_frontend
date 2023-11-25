// PrivateRouteStaff.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const PrivateRouteStaff = ({ element, ...props }) => {
  const { user } = useAuth();

  // Check if the user is authenticated and has the staff role
  return user && user.role === "staff" ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/StaffLogin" />
  );
};

export default PrivateRouteStaff;
