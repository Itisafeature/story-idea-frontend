import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import IdeaCard from './IdeaCard';
import useApiRequest from '../../hooks/useApiRequest';
import 'react-multi-carousel/lib/styles.css';
import styles from './RecentlyCommented.module.css';

const URL = 'http://localhost:3001/api/v1/ideas/recently-commented';

const RecentlyCommented = () => {
  const { isLoading, isError, errorMessage, sendRequest, data } =
    useApiRequest();

  useEffect(() => {
    sendRequest(URL, 'get', null);
  }, [sendRequest]);

  return (
    <div className={styles['carousel-container']}>
      <h1>Recently Commented on Ideas</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        className="carousel"
        containerClass={styles.carousel}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rtl={false}
        slidesToSlide={3}
        swipeable
      >
        {data.map(idea => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </Carousel>
    </div>
  );
};

export default RecentlyCommented;
