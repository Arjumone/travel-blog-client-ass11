import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddBlog from "../Pages/AddBlog/AddBlog";
import RecentBlogs from "../Pages/Home/RecentBlogs/RecentBlogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
       {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/blogs')
       },
       {
        path:'/recentBlogs',
        element:<RecentBlogs></RecentBlogs>,
        loader:()=>fetch('http://localhost:3000/blogs')
       },
       {
        path: "/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
       {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      ]
    },
  ]);
  export default router