import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
