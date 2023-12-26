import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Blog = ({ blog }) => {
  const { title, image, sortDescription } = blog;
  const { user } = useContext(AuthContext);

  const userEmail = user.email;

  const handleAddToWishlist = async (blog, userEmail) => {
    const newBlog = { userEmail, blog };

    
      const res = await fetch(`http://localhost:3000/wishlist/${userEmail}`, {
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
        <div className="card-body">
          <h2 className="card-title text-center font-bold text-xl">{title}</h2>
          <p className="text-center">{sortDescription}</p>
          <div className="card-actions justify-center">
            <button className="badge badge-outline bg-blue-600 text-white p-4">
              Details
            </button>

            <button
              onClick={() => handleAddToWishlist(blog, userEmail)}
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
