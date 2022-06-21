import { useState } from 'react';
import styles from './NewComment.module.css';

const NewComment = ({ ideaId, setData }) => {
  const [content, setContent] = useState('');

  const newCommentSubmitHandler = async e => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className={styles['leave-comment']}>Leave a Comment</h1>
      <form
        onSubmit={newCommentSubmitHandler}
        className={styles['comment-form']}
      >
        <textarea
          onChange={e => setContent(e.target.value)}
          value={content}
          className={styles['comment-content']}
        ></textarea>
      </form>
    </>
  );
};

export default NewComment;
