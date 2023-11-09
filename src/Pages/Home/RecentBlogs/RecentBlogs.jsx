import { useEffect, useState } from "react";
import Blog from "./Blog";
// import { useLoaderData } from "react-router-dom";


const RecentBlogs = () => {
    // const allBlogs = useLoaderData()
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/blogs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const sortData = data.sort((a,b)=>new Date(b.date)-new Date(a.date))
            console.log(sortData);
            setBlogs(sortData)
        })


    },[])

    return (
        <div>
            <h2 className=" font-bold text-3xl text-center my-3">Recent Travel Blogs Are Here</h2>
            <div className=" gap-3 grid grid-cols-1 md:grid-cols-3">
                {
                    blogs.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;