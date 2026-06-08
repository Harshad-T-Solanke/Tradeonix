import React from "react";

const ProtectedRoute = ({ children }) => {

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href =
      "http://localhost:3001/login";

    return null;
  }

  return children;
};

export default ProtectedRoute;