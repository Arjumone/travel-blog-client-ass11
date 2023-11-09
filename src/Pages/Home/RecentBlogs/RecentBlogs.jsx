import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const RecentBlogs = () => {
    const allBlogs = useLoaderData()
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
            <h2>{allBlogs.length}</h2>
        </div>
    );
};

export default RecentBlogs;