import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import BlogD from './BlogD';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    
    useEffect(() => {
      axios.get('http://localhost:3000/details')
        .then(res => {
        //   console.log(res.data);
          setBlogDetails(res.data);
        })
        .catch(error => {
          console.error("Error fetching wishlist:", error);
        });
    }, []);
  
    return (
      <div>
        <h2 className="font-bold text-3xl text-center my-3"> Blogs Details are Here</h2>
        <div className="gap-3 grid grid-cols-1 md:grid-cols-3">
           
          {blogDetails.map(
            myBg=><BlogD key={myBg._id} blog={myBg.blog}></BlogD>
          )}
        </div>
      </div>
    );
  };

export default BlogDetails;