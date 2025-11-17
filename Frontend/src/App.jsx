import React from "react";
import { Suspense, useEffect } from "react";
import { useAuthStore } from "./Store/useAuthStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routers } from "./Routes/routes";
import Loading from "./Layouts/Loading";

const router = createBrowserRouter(routers);

function App() {
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
