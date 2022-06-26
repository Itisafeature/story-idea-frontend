import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApiRequest from '../../hooks/useApiRequest';
import NewComment from '../comments/NewComment';
import CommentsList from '../comments/CommentsList';
import styles from './ShowIdea.module.css';

const URL = 'http://localhost:3001/api/v1/ideas/';
const COMMENT_LIMIT = 5;

const ShowIdea = () => {
  const [commentPage, setCommentPage] = useState(0);
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
    getMoreComments();
  }, [fetchComments]);

  const getMoreComments = () => {
    fetchComments(
      `${URL}${id}/comments?page=${commentPage}&limit=${COMMENT_LIMIT}`,
      'get',
      null,
      true
    );
    setCommentPage(prevCommentPage => prevCommentPage + 1);
  };

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
          <p onClick={getMoreComments} className={styles['view-comments']}>
            View More Comments
          </p>
        </div>
      </article>
    </section>
  );
};

export default ShowIdea;
