import { useState } from 'react';
import styles from './CommentsList.module.css';

const CommentsList = ({ comments }) => {
  return (
    <div className={styles.comments}>
      {comments.map(comment => (
        <div key={comment.id} className={styles['comment-card']}>
          <p>{new Date(comment.attributes.created_at).toLocaleString()}</p>
          <p>{comment.attributes.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
