import { useEffect, useState } from 'react';
import useApiRequest from '../../hooks/useApiRequest';
import ActionButton from '../UI/ActionButton';
import ShowErrors from '../UI/ShowErrors';
import styles from './NewComment.module.css';

const URL = 'http://localhost:3001/api/v1/comments';

const NewComment = ({ addComment, ideaId }) => {
  const [content, setContent] = useState('');
  const [showError, setShowError] = useState(false);
  const { isError, errorMessage, errorCount, sendRequest, data } =
    useApiRequest();

  useEffect(() => {
    let timeoutId;
    if (errorCount > 0) {
      setShowError(true);
      timeoutId = setTimeout(() => {
        setShowError(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [errorCount]);

  useEffect(() => {
    if (data.constructor === Object && data.id) {
      addComment(data);
    }
  }, [data]);

  const resetForm = () => {
    setContent('');
  };

  const newCommentSubmitHandler = async e => {
    e.preventDefault();
    const newComment = { content, idea_id: ideaId };
    sendRequest(URL, 'post', newComment, null, resetForm);
  };

  return (
    <>
      {showError && <ShowErrors errorMessage={errorMessage} />}
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
        <ActionButton type="submit">Leave a Comment</ActionButton>
      </form>
    </>
  );
};

export default NewComment;
