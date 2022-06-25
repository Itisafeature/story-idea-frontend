import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApiRequest from '../../hooks/useApiRequest';
import NewComment from '../comments/NewComment';
import CommentsList from '../comments/CommentsList';
import styles from './ShowIdea.module.css';

const URL = 'http://localhost:3001/api/v1/ideas/';

const ShowIdea = () => {
  const { isLoading, isError, sendRequest, data } = useApiRequest();
  const {
    isLoading: commentsIsLoading,
    isError: commentsIsError,
    sendRequest: fetchComments,
    data: comments,
    setData: setComments,
  } = useApiRequest();
  const { id } = useParams();
  const { attributes: idea } = data;

  useEffect(() => {
    sendRequest(URL + id, 'get');
  }, [sendRequest]);

  useEffect(() => {
    fetchComments(`${URL}${id}/comments`, 'get');
  }, [fetchComments]);

  const addComment = newComment => {
    setComments(prevComments => [newComment, ...prevComments]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Sorry there was an error.</div>;
  }

  return (
    <section>
      <article className={styles.idea}>
        <h1>{idea.title}</h1>
        <p>{idea.content}</p>
        <div className={styles['comments-container']}>
          <div className={styles['add-comment-container']}>
            <NewComment addComment={addComment} ideaId={idea.id} />
          </div>
          <CommentsList comments={comments} />
        </div>
      </article>
    </section>
  );
};

export default ShowIdea;
