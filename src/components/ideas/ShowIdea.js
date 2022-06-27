import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useApiRequest from '../../hooks/useApiRequest';
import NewComment from '../comments/NewComment';
import CommentsList from '../comments/CommentsList';
import styles from './ShowIdea.module.css';

const URL = 'http://localhost:3001/api/v1/ideas/';
const COMMENT_LIMIT = 5;

const ShowIdea = () => {
  const [commentPage, setCommentPage] = useState(0);
  const [hasMoreComments, setHasMoreComments] = useState(true);
  const {
    isLoading: ideaIsLoading,
    isError: ideaIsError,
    sendRequest: fetchIdea,
    data: ideaData,
  } = useApiRequest();
  const {
    isLoading: commentsIsLoading,
    isError: commentsIsError,
    sendRequest: fetchComments,
    data: comments,
    setData: setComments,
    totalCount: commentsCount,
  } = useApiRequest();
  const firstRender = useRef(true);

  const { id } = useParams();
  const { attributes: idea } = ideaData;

  useEffect(() => {
    fetchIdea(URL + id, 'get');
  }, [fetchIdea, id]);

  useEffect(() => {
    fetchComments(
      `${URL}${id}/comments?page=${commentPage}&limit=${COMMENT_LIMIT}`,
      'get',
      null,
      true
    );
  }, [fetchComments, id]);

  useEffect(() => {
    if (!firstRender.current) {
      setCommentPage(prevCommentPage => prevCommentPage + 1);
    } else {
      firstRender.current = false;
    }

    if (
      (commentsCount || commentsCount === 0) &&
      comments.length >= commentsCount
    ) {
      setHasMoreComments(false);
    }
  }, [comments, commentsCount]);

  const addComment = newComment => {
    setComments(prevComments => [newComment, ...prevComments]);
  };

  if (ideaIsLoading) {
    return <div>Loading...</div>;
  }

  if (ideaIsError) {
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
          {hasMoreComments && (
            <p
              onClick={() =>
                fetchComments(
                  `${URL}${id}/comments?page=${commentPage}&limit=${COMMENT_LIMIT}`,
                  'get',
                  null,
                  true
                )
              }
              className={styles['view-comments']}
            >
              View More Comments
            </p>
          )}
          {!hasMoreComments && (
            <p className={styles['no-more-comments']}>
              No More Comments Available
            </p>
          )}
        </div>
      </article>
    </section>
  );
};

export default ShowIdea;
