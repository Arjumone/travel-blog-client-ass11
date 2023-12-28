import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const { title, image, sortDescription } = blog;
  const { user } = useContext(AuthContext);
  const userEmail = user?.email; // Make sure user is not null or undefined
  const navigate = useNavigate();

  const handleAddToWishlist = async () => {
      if (!userEmail) {
        Swal.fire("Good job!", "Added the Blog to Wishlist!", "success");
        navigate("/login");
        return;
      }

      const newBlog = { blog, userEmail };

      const res = await fetch(`http://localhost:3000/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire("Good job!", "Added the Blog to Wishlist!", "success");
      } else {
        Swal.fire("Oops!", "Failed to add blog to wishlist", "error");
      }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col">
          <h2 className="card-title text-center font-bold text-xl">{title}</h2>
          <p className="text-center">{sortDescription}</p>
          <div className="card-actions justify-center flex-row">
            <button className="badge badge-outline bg-blue-600 text-white p-4">
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

export default Blog;
