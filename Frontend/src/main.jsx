import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Loading from "./Layouts/Loading";
import { Toaster } from "react-hot-toast";

const root = document.getElementById("root");

createRoot(root).render(
  <>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>

    <Toaster
      toastOptions={{
        style: {
          fontWeight: "700",
          fontSize: "15px",
        },
      }}
    />
  </>
);
