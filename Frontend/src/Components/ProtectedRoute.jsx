import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";
import React from "react";

const ProtectedRoute = () => {
  const { authUser, isEmailVerify, isLoading } = useAuthStore();

  if (isLoading) return <div>Loading...</div>;

  return authUser && isEmailVerify ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
