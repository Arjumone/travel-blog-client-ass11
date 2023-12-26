import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import BlogD from './BlogD';

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/details/${userEmail}`)
      .then((res) => {
        setBlogDetails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
      });
  }, [userEmail]);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-3"> Blogs Details are Here</h2>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3">
        {blogDetails.map((myBg) => (
          <BlogD key={myBg._id} blog={myBg.blog}></BlogD>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
