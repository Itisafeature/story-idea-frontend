import styles from './CommentsList.module.css';

const CommentsList = ({
  url,
  hasMoreComments,
  fetchComments,
  id,
  commentPage,
  comments,
  commentLimit,
}) => {
  console.log(id);
  return (
    <>
      <div className={styles.comments}>
        {comments.map(comment => (
          <div key={comment.id} className={styles['comment-card']}>
            <p>{new Date(comment.attributes.created_at).toLocaleString()}</p>
            <p>{comment.attributes.content}</p>
          </div>
        ))}
      </div>

      {hasMoreComments && (
        <p
          onClick={() =>
            fetchComments(
              `${URL}${id}/comments?page=${commentPage}&limit=${commentLimit}`,
              'get',
              null,
              true
            )
          }
          className={styles['view-comments']}
        >
          View More Comments
        </p>
      )}
      {!hasMoreComments && (
        <p className={styles['no-more-comments']}>No More Comments Available</p>
      )}
    </>
  );
};

export default CommentsList;
