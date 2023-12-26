// FeatureBlog.js
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { AuthContext } from '../../../Provider/AuthProvider';

const FeatureBlog = () => {
  const [features, setFeatures] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);
  const userEmail = user.email;
  const userPhoto = user.photoURL;

  useEffect(() => {
    // Fetch top 10 blogs based on word count
    axios.get('http://localhost:3000/blogs')
      .then(res => {
        setFeatures(res.data);
      })
      .catch(error => {
        console.error('Error fetching top blogs:', error);
      });
  }, []);

  const columns = [
    { name: 'Serial Number', selector: 'serialNumber', sortable: true },
    { name: 'Blog Title', selector: 'title', sortable: true },
    { name: 'Blog Owner', selector: 'blogOwner', sortable: true },
    { name: 'Blog Owner Profile Picture', selector: 'blogOwnerProfilePicture', sortable: true, cell: row => <img src={row.blogOwnerProfilePicture} alt="Profile" className="rounded-full h-8 w-8" /> },
  ];

  const data = features.map((feature, index) => ({
    serialNumber: index + 1,
    title: feature.title,
    blogOwner: userEmail, // Update this with the actual property holding the blog owner
    blogOwnerProfilePicture: userPhoto || 'https://example.com/default-profile-image.jpg', // Provide a default image URL if userPhoto is not available
  }));

  console.log(data); // Log the data to check if the image URL is correct

  return (
    <div>
      <h2 className='text-center text-3xl my-4 font-semibold'>Top 10 Posts</h2>
      <DataTable
        title=""
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default FeatureBlog;
