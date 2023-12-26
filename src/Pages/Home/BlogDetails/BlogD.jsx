import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";

const BlogD = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, sortDescription, image, longDescription, userEmail } = blog;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isBlogOwner, setIsBlogOwner] = useState(false);
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  useEffect(() => {
    // Check if the current user is the blog owner
    setIsBlogOwner(user && user.email === userEmail);

    // Check if the current user is the blog owner to show/hide the update button
    setShowUpdateButton(user && user.email === userEmail);
  }, [user, userEmail]);

  const handleUpdate = (_id) => {
    console.log(_id);
    // Navigate to the dynamic route where blog details can be updated
    // You can use React Router or any navigation mechanism you have in your app
  };

  const handleComment = () => {
    const newComment = {
      blogId: _id,
      userName: user.displayName,
      userProfilePicture: user.photoURL,
      commentData: comment,
    };

    // Send the new comment to the backend
    axios
      .post("http://localhost:3000/comments", newComment)
      .then((response) => {
        // Handle success (you can update the state or take other actions)
        console.log("Comment added successfully:", response.data);
        setComments([...comments, newComment]);
        setComment("");
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding comment:", error);
      });
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{sortDescription}</p>
          <p>{longDescription}</p>

          {showUpdateButton && <button onClick={() => handleUpdate(_id)}>Update</button>}

          {isBlogOwner ? (
            <p>You cannot comment on your own blog.</p>
          ) : (
            <>
              {user ? (
                <>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border-4"
                    name="Comment"
                    placeholder="Comment"
                    cols="50"
                    rows="5"
                  ></textarea>
                  <button onClick={handleComment}>Submit Comment</button>
                </>
              ) : (
                <p>Please log in to comment on this blog.</p>
              )}
            </>
          )}

          {comments.length > 0 && (
            <div>
              <h3 className=" font-bold">Comments:</h3>
              {comments.map((comment, index) => (
                <div className="flex text-center justify-center items-center space-y-2 bg-slate-200 gap-3" key={index}>
                   <p>{comment.commentData}</p>
                  <p>Name: {comment.userName}</p>
                  <img src={comment.userProfilePicture} alt="Profile" />
                 
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogD;
