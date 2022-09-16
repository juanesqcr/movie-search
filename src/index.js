import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Home from "./pages/Home";
import AppRoutes from "./routes/routes.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
