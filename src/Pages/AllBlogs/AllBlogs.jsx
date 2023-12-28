import { useEffect, useState } from 'react';
import AllBCard from './AllBCard';

const AllBlogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/blogs`);
        const data = await response.json();
        setFilteredBlogs(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${title}`);
        const data = await response.json();
        setFilteredBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [title]);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-3">All Your Blogs Are Here</h2>
      <div className="mb-4">
        <label className="text-lg font-semibold">Search by Title:</label>
        <input
          type="text"
          className="ml-2 p-2 border rounded"
          placeholder="Enter Title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <AllBCard key={blog._id} blog={blog}></AllBCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
