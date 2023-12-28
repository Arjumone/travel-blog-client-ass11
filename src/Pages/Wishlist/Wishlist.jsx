import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBlogs from "./MyBlogs";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  console.log(wishlist);

  useEffect(() => {
    fetch(`https://travel-blog-server-side.vercel.app/wishlist/${user.email}`)
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, [user.email]);

  return (
    <div className=" bg-cyan-100 rounded p-3">
      <h2 className="font-bold text-3xl text-center my-3">
        All Wishlist Blogs are Here
      </h2>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-3">
        {wishlist.map((myBg) => (
          <MyBlogs
            key={myBg._id}
            myBg={myBg}
            wishlist={wishlist}
            setWishlist={setWishlist}
          ></MyBlogs>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
