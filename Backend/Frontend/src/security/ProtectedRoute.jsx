import React from 'react'
import { useAuthStore } from '../stores/useAuth'
import Loading from '../layout/Loading';
import { useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const {isLoading, isAuthenticated } = useAuthStore();

  if(isLoading) return <Loading />

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
