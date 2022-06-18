import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApiRequest from '../../hooks/useApiRequest';
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
      <article>
        <h1>{idea.title}</h1>
        <div>
          <p>{idea.content}</p>
        </div>
      </article>
    </section>
  );
};

export default ShowIdea;
