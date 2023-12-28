import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const { title, image, sortDescription } = blog;
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const navigate = useNavigate();

  const handleAddToWishlist = async () => {
    if (!userEmail) {
      Swal.fire("Good job!", "Added the Blog to Wishlist!", "success");
      navigate("/login");
      return;
    }

    const newBlog = { blog, userEmail };

    const res = await fetch(
      `https://travel-blog-server-side.vercel.app/wishlist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      }
    );

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire("Good job!", "Added the Blog to Wishlist!", "success");
      navigate("/wishlist");
    } else {
      Swal.fire("Oops!", "Failed to add blog to wishlist", "error");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="card shadow-xl flex-1 p-4 bg-teal-100">
        <figure className="rounded overflow-hidden h-40">
          <img
            className="rounded h-full w-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="text-center mt-3 flex-1">
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="my-3">{sortDescription}</p>
        </div>
        <div className="card-actions justify-center flex-none">
          <button className="badge badge-outline bg-cyan-800 text-white p-4">
            Details
          </button>
          <button
            onClick={handleAddToWishlist}
            className="badge badge-outline bg-cyan-800 text-white p-4 ml-4"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
