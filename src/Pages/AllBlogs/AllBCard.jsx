import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AllBCard = ({ bg }) => {
  console.log(bg);
  const {_id, title, image, sortDescription } = bg;
  const { user } = useContext(AuthContext);

  const userEmail = user.email;

  const handleAddToWishlist = (blog, userEmail) => {
    const newBlog = { userEmail, blog };
    
    fetch(`http://localhost:3000/wishlist/${userEmail}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Added the Blog In Wishlist!");
        }
      });
  };

  const handleAddToDetails = (blog, userEmail) => {
    const newBlog = { userEmail, blog };
    
    fetch(`http://localhost:3000/details/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Added the Blog In Wishlist!");
        }
      });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {title}
          </h2>
          <p>{sortDescription}</p>
          <div className="card-actions justify-center">
          <Link to="/blogDetails">
          <button onClick={()=>handleAddToDetails(bg,userEmail)} className="badge badge-outline bg-blue-600 text-white p-4">Details</button>
          </Link>
            <button onClick={()=>handleAddToWishlist(bg,userEmail)} className="badge badge-outline bg-blue-600 text-white p-4">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBCard;
