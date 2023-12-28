import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const MyBlogs = ({ myBg, wishlist, setWishlist }) => {
  const { blog } = myBg;
  const { _id, title, image, sortDescription } = blog;

  const { user } = useContext(AuthContext);

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/wishlist/${user.email}/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your Blog has been deleted.", "success");
              const remaining = wishlist.filter((bg) => bg._id !== _id);
              setWishlist(remaining);
            } else {
              Swal.fire("Error!", "Failed to delete the blog");
            }
          })
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{sortDescription}</p>
          <div className="card-actions justify-center">
            <button className="badge badge-outline bg-blue-600 text-white p-4">
              Details
            </button>
            <button
              onClick={handleRemove}
              className="badge badge-outline bg-red-600 text-white p-4"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
