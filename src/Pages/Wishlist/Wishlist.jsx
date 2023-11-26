
import MyBlogs from "./MyBlogs";
import { useContext, useState } from "react";
// import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Wishlist = () => {
  const {user}= useContext(AuthContext)
  const myWishlists = useLoaderData()

  const myws = myWishlists?.filter(myWishlist=>myWishlist.userEmail==user.email)
  const [wishlist, setWishlist] = useState(myws);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/wishlist')
  //     .then(res => {
  //       console.log(res.data);
  //       setWishlist(res.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching wishlist:", error);
  //     });
  // }, []);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-3">All Wishlist Blogs are Here</h2>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3">
        {wishlist.map(
          myBg=><MyBlogs key={myBg._id} myBg={myBg} wishlist={wishlist} setWishlist={setWishlist}></MyBlogs>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

