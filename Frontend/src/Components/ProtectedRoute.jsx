import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";

const ProtectedRoute = () => {
  const { authUser, isLoading } = useAuthStore();

  if (isLoading) return <div>Loading...</div>;

  return authUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
