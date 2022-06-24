import { useState } from 'react';
import styles from './NewComment.module.css';

const URL = 'http://localhost:3001/api/v1/comments';

const NewComment = ({ addComment, ideaId }) => {
  const [content, setContent] = useState('');

  const newCommentSubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          content,
          idea_id: ideaId,
        }),
      });
      const data = await response.json();
      addComment(data.data);
      setContent('');
    } catch (err) {
      console.log(err);
    }
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
        <button type="submit">Leave Comment</button>
      </form>
    </>
  );
};

export default NewComment;
