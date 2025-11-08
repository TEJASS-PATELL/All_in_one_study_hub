import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import Loading from "../Layouts/Loading";

const ProtectedRoute = () => {
  const { authUser, isLoading, fetchUser } = useAuthStore();
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      fetchUser();
      hasFetched.current = true;
    }
  }, [fetchUser]);

  if (isLoading) return <Loading />;

  return authUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
