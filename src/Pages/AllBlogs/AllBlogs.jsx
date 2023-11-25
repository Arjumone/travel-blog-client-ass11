import axios from "axios";
import { useEffect, useState } from "react";
import AllBCard from "./AllBCard";


const AllBlogs = () => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/blogs')
        .then(res=>{
            console.log(res.data);
            const sortData = res.data.sort((a,b)=>new Date(b.date)-new Date(a.date))
            console.log(sortData);
            setBlogs(sortData)
        })


    },[])

    return (
        <div>
            <h2 className=" font-bold text-3xl text-center my-3">All Travel Blogs Are Here</h2>
            <div className=" gap-3 grid grid-cols-1 md:grid-cols-3">
                {
                    blogs.map(blog=><AllBCard key={blog._id} bg={blog}></AllBCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;