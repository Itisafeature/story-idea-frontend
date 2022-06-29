import { useState } from 'react';
import useApiRequest from '../../hooks/useApiRequest';
import ActionButton from '../UI/ActionButton';
import ShowFormErrors from '../UI/ShowFormErrors';
import styles from './NewIdea.module.css';

const URL = 'http://localhost:3001/api/v1/ideas';

const NewIdea = () => {
  const { isError, errorMessage, sendRequest } = useApiRequest();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  const submitIdeaHandler = async e => {
    e.preventDefault();
    const newIdea = { title, content };
    sendRequest(URL, 'post', newIdea, null, resetForm);
  };

  return (
    <div className={styles['form-container']}>
      <h1 className={styles['new-idea-title']}>Submit Your Idea!</h1>
      {isError && <ShowFormErrors errorMessage={errorMessage} />}
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
