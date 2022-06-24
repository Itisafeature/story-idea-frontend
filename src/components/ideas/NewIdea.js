import { useState } from 'react';
import useApiRequest from '../../hooks/useApiRequest';
import ActionButton from '../UI/ActionButton';
import styles from './NewIdea.module.css';

const URL = 'http://localhost:3001/api/v1/ideas';

const NewIdea = () => {
  const { isError, errorMessage, sendRequest, data } = useApiRequest();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  const submitIdeaHandler = async e => {
    e.preventDefault();
    const newIdea = { title, content };
    sendRequest(URL, 'post', newIdea, resetForm);
  };

  const renderErrors = () => {
    return Object.values(errorMessage).map((err, idx) => (
      <p key={idx} className={styles['error__item']}>
        {err}
      </p>
    ));
  };

  return (
    <div className={styles['form-container']}>
      <h1 className={styles['new-idea-title']}>Submit Your Idea!</h1>
      {isError && <div className={styles.errors}>{renderErrors()}</div>}
      <form className={styles['new-idea-form']} onSubmit={submitIdeaHandler}>
        <label className={styles['input-label']} htmlFor="new-idea-title">
          Title
        </label>
        <input
          onChange={e => setTitle(e.target.value)}
          value={title}
          type="text"
          id="new-idea-title"
          className={styles.input}
        />
        <label className={styles['input-label']} htmlFor="new-idea-content">
          Content
        </label>
        <textarea
          onChange={e => setContent(e.target.value)}
          value={content}
          id="new-idea-content"
          className={styles.content}
        ></textarea>
        <ActionButton widened={true} type="submit">
          Submit Idea
        </ActionButton>
      </form>
    </div>
  );
};

export default NewIdea;
