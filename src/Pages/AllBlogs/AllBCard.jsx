import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AllBCard = ({ blog }) => {
  const { title, image, sortDescription, category, _id } = blog;
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  const handleAddToWishlist = () => {
    const newBlog = { userEmail, blog };

    fetch(`http://localhost:3000/wishlist/${userEmail}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire('Good job!', 'Added the Blog to Wishlist!');
        }
      });
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
            <Link to={`/blogDetails/${_id}`}>
              <button className="badge badge-outline bg-blue-600 text-white p-4">
                Details
              </button>
            </Link>
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
