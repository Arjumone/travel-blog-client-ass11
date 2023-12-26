import Swal from "sweetalert2";

const MyBlogs = ({ myBg, setWishlist }) => {
  console.log(myBg);
  const { blog } = myBg;
  const { _id, title, image, sortDescription } = blog;
  const handleRemove = (_id) => {
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
        fetch(`http://localhost:3000/wishlist/${blog._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Blog has been deleted.", "success");
              const remaining = myBg.filter((bg) => bg._id !== _id);
              console.log(remaining);
              setWishlist(remaining);
            }
          });
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
              onClick={() => handleRemove(_id)}
              className="badge badge-outline bg-blue-600 text-white p-4"
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
