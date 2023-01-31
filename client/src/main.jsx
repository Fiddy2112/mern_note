import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/AuthProvider";
import App from "./App";
import "./index.css";
import "./firebase/config";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
