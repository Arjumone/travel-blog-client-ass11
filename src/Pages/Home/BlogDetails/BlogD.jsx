import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const BlogD = ({ blog }) => {
    console.log(blog);
  const { user } = useContext(AuthContext); 
  const { _id, title, sortDescription, image, longDescription } = blog;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleUpdate = (_id)=>{

  }

  const handleComment = () => {
    const newComment = {
      blogId: _id,
      userName: user.displayName,
      userProfilePicture: user.photoURL,
      commentData: comment,
    };
    console.log(newComment);
    setComments((prevComments) => [...prevComments, newComment]);
    setComment("");
  };

  const isBlogOwner = user && user.email === blog.userEmail;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{sortDescription}</p>
          <p>{longDescription}</p>

          {isBlogOwner ? (
            <button onClick={() => handleUpdate(_id)}>Update</button>
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
              <h3>Comments</h3>
              {comments.map((comment) => (
                <div key={comment.commentId}>
                  <p>{comment.userName}</p>
                  <p>{comment.userProfilePicture}</p>
                  <p>{comment.commentData}</p>
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

