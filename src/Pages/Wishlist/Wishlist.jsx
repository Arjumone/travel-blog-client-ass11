import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import MyBlogs from "./MyBlogs";


const Wishlist = () => {
    const {user}= useContext(AuthContext)
    const allBlogs = useLoaderData()

    const myBlog = allBlogs?.filter(blog=>blog.userEmail==user.email);

    const [blogs,setBlogs] =useState(myBlog)
    

    return (
        <div className=" gap-3 grid grid-cols-1 md:grid-cols-3">
            {
                blogs.map(myBg=><MyBlogs key={myBg._id} myBg={myBg} blogs={blogs} setBlogs={setBlogs}></MyBlogs>)
            }
        </div>
    );
};

export default Wishlist;