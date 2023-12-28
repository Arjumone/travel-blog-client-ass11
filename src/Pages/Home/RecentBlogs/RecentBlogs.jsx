import { useContext, useEffect, useState } from "react";
import Blog from "./Blog";
import { AuthContext } from "../../../Provider/AuthProvider";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://travel-blog-server-side.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogs(sortedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-3">
        Recent Travel Blogs Are Here
      </h2>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3">
        {blogs.slice(0, 6).map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
