import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Provider/AuthProvider';
import CommentSection from './CommentSection';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const BlogD = ({ blog }) => {
  const { _id, title, sortDescription, image, longDescription, userEmail } = blog;
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isBlogOwner, setIsBlogOwner] = useState(false);
  const [showUpdateButton, setShowUpdateButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsBlogOwner(user && user.email === userEmail);
    setShowUpdateButton(user && user.email === userEmail);

    axios
      .get(`http://localhost:3000/comments/${userEmail}`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [user, userEmail, _id]);

  const handleUpdate = (blogId) => {
    navigate(`/update/${blogId}`, { state: { blog } });
  };

  const handleComment = () => {
    if (!user) {
      console.error('User not logged in. Cannot add comment.');
      return;
    }

    if (user.email === userEmail) {
      Swal.fire("You cannot comment on your own blog.");
      return;
    }

    const hasUserCommented = comments.some((c) => c.userName === user.displayName);
    if (hasUserCommented) {
      Swal.fire("You have already commented on this blog.");
      return;
    }

    const newComment = {
      blogId: _id,
      userName: user.displayName,
      userProfilePicture: user.photoURL,
      commentData: comment,
    };

    axios
      .post('http://localhost:3000/comments', newComment)
      .then((response) => {
        console.log('Comment added successfully:', response.data);
        setComments([...comments, newComment]);
        setComment('');
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
  };

  return (
    <div className="card-container">
      <div className="card card-compact bg-yellow-400 shadow-xl flex flex-col h-full">
        <figure className="flex-1">
          <img src={image} alt="Shoes" className="rounded-t-lg w-full h-full object-cover" />
        </figure>
        <div className="card-body flex-1 flex flex-col justify-between">
          <h2 className="card-title">{title}</h2>
          <p className=' font-bold'>Sort Description: {sortDescription}</p>
          <p>Long Description: {longDescription}</p>

          {showUpdateButton && <button className='bg-amber-700 text-white rounded py-3' onClick={() => handleUpdate(_id)}>
            Update
          </button>}

          {!isBlogOwner && user && (
            <>
              <p>User Email: {user.email}</p>
              <p>Blog Owner Email: {blog.userEmail}</p>

              {!isBlogOwner && user && userEmail !== user.email && (
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
              )}
            </>
          )}

          {comments.length > 0 && <CommentSection comments={comments} />}
        </div>
      </div>
    </div>
  );
};

export default BlogD;
