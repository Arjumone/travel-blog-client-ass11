import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import MyBlogs from "./MyBlogs";


const Wishlist = () => {
    const {user}= useContext(AuthContext)
    const allBlogs = useLoaderData()

    const blogs = allBlogs?.filter(blog=>blog.userEmail==user.email);

    

    return (
        <div>
            {
                blogs.map(myBlogs=><MyBlogs key={myBlogs._id} myBlogs={myBlogs}></MyBlogs>)
            }
        </div>
    );
};

export default Wishlist;