import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApiRequest from '../../hooks/useApiRequest';
import NewComment from '../comments/NewComment';
import styles from './ShowIdea.module.css';

const URL = 'http://localhost:3001/api/v1/ideas/';

const ShowIdea = () => {
  const { isLoading, isError, errorMessage, sendRequest, data } =
    useApiRequest();
  const { id } = useParams();
  const { attributes: idea } = data;

  useEffect(() => {
    sendRequest(URL + id, 'get');
  }, [sendRequest]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <article className={styles.idea}>
        <h1>{idea.title}</h1>
        <p>{idea.content}</p>
        <div className={styles['comments-container']}>
          <div className={styles['add-comment-container']}>
            <NewComment ideaId={idea.id} />
          </div>
          <div className={styles.comments}>
            <CommentsList comments={idea.comments} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ShowIdea;
