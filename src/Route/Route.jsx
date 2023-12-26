import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddBlog from "../Pages/AddBlog/AddBlog";
import RecentBlogs from "../Pages/Home/RecentBlogs/RecentBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import SignUp from "../Pages/SignUp/SignUp";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/Home/BlogDetails/BlogDetails";
import FeatureBlog from "../Pages/Home/FeatureBlog/FeatureBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recentBlogs",
        element: <RecentBlogs></RecentBlogs>,
        // loader: () => fetch("http://localhost:3000/blogs"),
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
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
        // loader: () => fetch("http://localhost:3000"),
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featured",
        element: <FeatureBlog></FeatureBlog>,
      },
      {
        path: "/blogDetails",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
