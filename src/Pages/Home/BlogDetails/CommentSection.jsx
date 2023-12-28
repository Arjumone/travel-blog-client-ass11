
import Comment from './Comment';

const CommentSection = ({ comments }) => {
  return (
    <div>
      <h3 className="font-bold">Comments:</h3>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
