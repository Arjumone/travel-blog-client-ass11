

const Comment = ({ comment }) => {
  const { userName, userProfilePicture, commentData } = comment;

  return (
    <div className="comment flex gap-3">
      <div className="comment-header flex">
        <img  src={userProfilePicture} alt="User Profile" className="user-profile w-10 h-10" />
        <span className="user-name">{userName}</span>
      </div>
      <p className="comment-text">Comment: {commentData}</p>
    </div>
  );
};

export default Comment;
