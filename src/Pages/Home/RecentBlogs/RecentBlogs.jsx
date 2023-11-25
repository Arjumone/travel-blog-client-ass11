import { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";


const RecentBlogs = () => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/blogs/current')
        .then(res=>{
            console.log(res.data);
            const sortData = res.data.sort((a,b)=>new Date(b.date)-new Date(a.date))
            console.log(sortData);
            setBlogs(sortData)
        })


    },[])

    return (
        <div>
            <h2 className=" font-bold text-3xl text-center my-3">Recent Travel Blogs Are Here</h2>
            <div className=" gap-3 grid grid-cols-1 md:grid-cols-3">
                {
                    blogs.slice(0,6).map(blog=><Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;