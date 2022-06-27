import { useState, useEffect, useCallback, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useApiRequest from '../../hooks/useApiRequest';
import IdeaCard from './IdeaCard';
import styles from './IdeasList.module.css';

const LIMIT = 10;
const URL = 'http://localhost:3001/api/v1/ideas';

const IdeasList = () => {
  const {
    isError: ideasIsError,
    errorMessage: ideasErrorMessage,
    isLoading: ideasIsLoading,
    sendRequest: fetchIdeas,
    data: ideas,
    totalCount: ideasCount,
  } = useApiRequest();

  const [ideaPage, setIdeaPage] = useState(0);
  const [hasMoreIdeas, setHasMoreIdeas] = useState(true);

  const firstRender = useRef();

  useEffect(() => {
    fetchIdeas(`${URL}?page=${ideaPage}&limit=${LIMIT}`, 'get', null, true);
  }, [fetchIdeas]);

  useEffect(() => {
    if (!firstRender.current) {
      setIdeaPage(prevIdeaPage => prevIdeaPage + 1);
    } else {
      firstRender.current = false;
    }

    if ((ideasCount || ideasCount === 0) && ideas.length >= ideasCount) {
      setHasMoreIdeas(false);
    }
  }, [ideas, ideasCount]);

  console.log(ideas.length);

  if (!ideas) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className={styles['list-header']}>See All Ideas</h1>
      <InfiniteScroll
        dataLength={ideas.length}
        next={() =>
          fetchIdeas(
            `${URL}?page=${ideaPage}&limit=${LIMIT}`,
            'get',
            null,
            true
          )
        }
        hasMore={hasMoreIdeas}
        loader={<h4>Loading...</h4>}
        endMessage={<p className={styles.end}>That's all for now!</p>}
      >
        <div className={styles['ideas-container']}>
          {ideas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} classes="main-list" />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default IdeasList;
