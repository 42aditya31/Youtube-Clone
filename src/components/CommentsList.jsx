import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return (
    <div className="mt-2">
      {comments?.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="ml-12 border-l border-gray-300 pl-4">
            <CommentsList comments={comment.reply} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
