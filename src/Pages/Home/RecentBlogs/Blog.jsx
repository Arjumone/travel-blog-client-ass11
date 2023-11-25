import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Blog = ({ blog }) => {
  const { title, image, sortDescription } = blog;
  const { user } = useContext(AuthContext);

  const userEmail = user.email;
  // console.log(userEmail);

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

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
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
            <button className="badge badge-outline bg-blue-600 text-white p-4">Details</button>
            
            <button onClick={()=>handleAddToWishlist(blog,userEmail)} className="badge badge-outline bg-blue-600 text-white p-4">Wishlist</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
