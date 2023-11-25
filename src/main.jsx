import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Route/Route";
import AuthProvider from "./Provider/AuthProvider";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className=" mx-auto max-w-6xl">
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
    </QueryClientProvider>
    ,
  </div>
);
// server side- https://github.com/Porgramming-Hero-web-course/b8a11-server-side-Arjumone
// client side-https://github.com/Porgramming-Hero-web-course/b8a11-client-side-Arjumone
