import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllBCard = ({ blog }) => {
  const { title, image, sortDescription, category } = blog;
  const navigate = useNavigate();

  const handleAddToWishlist = async () => {
    const newBlog = { blog };

    try {
      const response = await fetch(
        `https://travel-blog-server-side.vercel.app/wishlist`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBlog),
        }
      );
      const data = await response.json();

      if (data.insertedId) {
        Swal.fire("Good job!", "Added the Blog to Wishlist!");
        navigate(`/wishlist`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToDetails = async () => {
    const newBlog = { blog };

    try {
      const response = await fetch(
        `https://travel-blog-server-side.vercel.app/details`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBlog),
        }
      );
      const data = await response.json();

      if (data.insertedId) {
        Swal.fire("Good job!", "Added the Blog to Details!");
        navigate(`/blogDetails`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card-container">
      <div className="card bg-yellow-100 shadow-xl flex flex-col h-full">
        <figure className="flex-1">
          <img
            src={image}
            alt="Blog"
            className="rounded-t-lg w-full h-full object-cover"
          />
        </figure>
        <div className="card-body flex-1 flex flex-col justify-between">
          <div>
            <h2 className="card-title text-2xl font-bold">Title: {title}</h2>
            <p className="font-bold my-3">Category: {category}</p>
            <p>Sort Description: {sortDescription}</p>
          </div>
          <div className="text-center">
            <button
              onClick={handleAddToDetails}
              className="badge badge-outline lg:mr-4 bg-yellow-600 text-white p-4"
            >
              Details
            </button>
            <button
              onClick={handleAddToWishlist}
              className="badge badge-outline bg-yellow-600 text-white p-4"
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
