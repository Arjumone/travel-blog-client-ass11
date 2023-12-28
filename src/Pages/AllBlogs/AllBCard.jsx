import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllBCard = ({ blog }) => {
  const { title, image, sortDescription, category} = blog;
  const navigate = useNavigate();

  const handleAddToWishlist = async () => {
    const newBlog = {  blog };

    try {
      const response = await fetch(`http://localhost:3000/wishlist`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });
      const data = await response.json();

      if (data.insertedId) {
        Swal.fire('Good job!', 'Added the Blog to Wishlist!');
        
        
        navigate(`/wishlist`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddToDetails = async () => {
    const newBlog = { blog };
    
      const response = await fetch(`http://localhost:3000/details`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });
      const data = await response.json();

      if (data.insertedId) {
        Swal.fire('Good job!', 'Added the Blog to Details!');
        navigate(`/blogDetails`);
      }
  };


  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Blog" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Title: {title}</h2>
          <p className="font-bold">Category: {category}</p>
          <p>{sortDescription}</p>
          <div className="card-actions justify-center">
            <button
            onClick={handleAddToDetails}
              className="badge badge-outline bg-blue-600 text-white p-4"
              
            >
              Details
            </button>
            <button
              onClick={handleAddToWishlist}
              className="badge badge-outline bg-blue-600 text-white p-4"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBCard;
