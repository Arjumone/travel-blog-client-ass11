import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className=" mx-auto max-w-6xl">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);