import { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import IdeaCard from './IdeaCard';
import styles from './IdeasList.module.css';

const LIMIT = 10;
const URL = 'http://localhost:3001/api/v1/ideas';

const IdeasList = () => {
  const [ideas, setIdeas] = useState([]);
  const [page, setPage] = useState(0);
  const [isMoreIdeas, setIsMoreIdeas] = useState(true);

  const fetchIdeas = useCallback(async (page, limit) => {
    try {
      const response = await fetch(`${URL}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data.data.length === 0) {
        setIsMoreIdeas(false);
      } else {
        setIdeas(prevIdeas => [...prevIdeas, ...data.data]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchIdeas(page, LIMIT);
  }, [fetchIdeas]);

  return (
    <>
      <h1 className={styles['list-header']}>See All Ideas</h1>
      <InfiniteScroll
        dataLength={ideas.length}
        next={() => fetchIdeas(page, LIMIT)}
        hasMore={isMoreIdeas}
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
