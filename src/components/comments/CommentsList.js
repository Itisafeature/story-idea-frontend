import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './CommentsList.module.css';

const CommentsList = ({
  url,
  fetchComments,
  comments,
  hasMoreComments,
  isLoading,
}) => {
  if (comments.length === 0 && isLoading) {
    return <LoadingSpinner />;
  }

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

      {isLoading && <LoadingSpinner />}

      {!isLoading && hasMoreComments && (
        <p
          onClick={() => fetchComments(url, 'get', null, true)}
          className={styles['view-comments']}
        >
          View More Comments
        </p>
      )}
      {!isLoading && !hasMoreComments && (
        <p className={styles['no-more-comments']}>No More Comments Available</p>
      )}
    </>
  );
};

export default CommentsList;
