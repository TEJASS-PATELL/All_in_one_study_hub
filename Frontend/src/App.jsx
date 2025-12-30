import React, { useEffect } from "react";
import { useAuthStore } from "./Store/useAuthStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routers } from "./Routes/routes";
import Loading from "./Layouts/Loading";

const router = createBrowserRouter(routers);

function App() {
  const { fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
