import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

const root = document.getElementById("root");

createRoot(root).render(
  <>
    <App />
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
