import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Premium from "./pages/AdvanceFeature";
import Free from "./pages/FreeFeature";
import TermsConditions from "./components/Term'sAndCondition";
import EnterEmail from "./components/EnterEmail";
import ResetPassword from "./components/ResetPassword";
import { Toaster } from "react-hot-toast";
import VerifyEmail from "./components/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./security/protectedRoute";
import { useAuthStore } from "./stores/useAuth";
import { useEffect } from "react";
import Loading from "./layout/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/premium-feature",
        element: <ProtectedRoute />,
        children: [{ path: "", element: <Premium /> }]
      },
      {
        path: "/free-feature",
        element: <ProtectedRoute />,
        children: [{ path: "", element: <Free /> }]
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signup/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/forgot-password",
    element: <EnterEmail />
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{ path: "", element: <Dashboard /> }]
  },
  {
    path: "terms-and-conditions",
    element: <TermsConditions />
  },
]);

const App = () => {
  const { checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) return <Loading />

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          style: {
            minWidth: "380px",
            background: "white",
            color: "black",
            fontSize: "15px",
            padding: "16px",
            borderRadius: "10px",
          },
          success: {
            style: { background: "white" },
          },
          error: {
            style: { border: "1px solid red" },
          },
        }}
      />
    </>
  )
}

export default App;