import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const BlogUpdate = () => {
  const location = useLocation();
  const { blog } = location.state;
  const { _id, title: initialTitle, sortDescription: initialSortDescription, image: initialImage, longDescription: initialLongDescription, category: initialCategory } = blog;

  const [title, setTitle] = useState(initialTitle);
  const [sortDescription, setSortDescription] = useState(initialSortDescription);
  const [image, setImage] = useState(initialImage);
  const [longDescription, setLongDescription] = useState(initialLongDescription);
  const [category, setCategory] = useState(initialCategory);

  const navigate = useNavigate()

  const handleUpdate = () => {
    const updatedBlog = {
      title,
      sortDescription,
      image,
      longDescription,
      category,
    };
  
    axios
      .put(`http://localhost:3000/blogs/${_id}`, updatedBlog)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Blog Updated!',
          text: 'Your blog has been updated successfully.',
        });
        navigate("/")
      })
      .catch((error) => {
        console.error( error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
        });
      });
  };
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Update Blog</h2>

      <label className="block mb-2">Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" />

      <label className="block mb-2 mt-4">Sort Description:</label>
      <textarea
        value={sortDescription}
        onChange={(e) => setSortDescription(e.target.value)}
        className="border p-2 w-full"
        rows="5"
      ></textarea>

      <label className="block mb-2 mt-4">Image URL:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="border p-2 w-full" />

      <label className="block mb-2 mt-4">Long Description:</label>
      <textarea
        value={longDescription}
        onChange={(e) => setLongDescription(e.target.value)}
        className="border p-2 w-full"
        rows="10"
      ></textarea>

      <label className="block mb-2 mt-4">Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 w-full" />

      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
      >
        Update
      </button>
    </div>
  );
};

export default BlogUpdate;
