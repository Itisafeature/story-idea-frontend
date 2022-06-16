import { useState } from 'react';
import styles from './NewIdea.module.css';

const URL = 'http://localhost:3001/api/v1/ideas';

const NewIdea = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isError, setIsError] = useState(null);
  const [errorMessages, setErrorMessages] = useState();

  const submitIdeaHandler = async e => {
    e.preventDefault();
    const newIdea = { title, content };
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea),
    });
    const data = await response.json();

    if (!response.ok) {
      setIsError(true);
      setErrorMessages(Object.values(data));
    } else {
      setTitle('');
      setContent('');
      setIsError(false);
      setErrorMessages([]);
    }
  };

  const renderErrors = () => {
    return errorMessages.map(err => (
      <p className={styles['error__item']}>{err}</p>
    ));
  };

  return (
    <div className={styles['form-container']}>
      <h1 className={styles['new-idea-title']}>Submit Your Idea!</h1>
      {isError && <div className={styles.errors}>{renderErrors()}</div>}
      <form className={styles['new-idea-form']} onSubmit={submitIdeaHandler}>
        <label htmlFor="new-idea-title">Title</label>
        <input
          onChange={e => setTitle(e.target.value)}
          value={title}
          type="text"
          id="new-idea-title"
          className={styles.input}
        />
        <label htmlFor="new-idea-content">Content</label>
        <textarea
          onChange={e => setContent(e.target.value)}
          value={content}
          id="new-idea-content"
          className={styles.content}
        ></textarea>
        <button type="submit">Submit Idea</button>
      </form>
    </div>
  );
};

export default NewIdea;
