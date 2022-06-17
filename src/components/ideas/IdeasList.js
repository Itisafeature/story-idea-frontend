import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import IdeaCard from './IdeaCard';

import 'react-multi-carousel/lib/styles.css';
import styles from './IdeasList.module.css';

const URL = 'http://localhost:3001/api/v1/ideas';

const IdeasList = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getIdeas = async () => {
      const response = await fetch(URL);
      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setErrorMessage(data);
      } else {
        setIdeas(data.data);
      }

      setLoading(false);
    };

    getIdeas();
  }, []);

  return (
    <div className={styles['carousel-container']}>
      <h1>Look through Ideas!</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        className="carousel"
        containerClass={styles.carousel}
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
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
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={3}
        swipeable
      >
        {ideas.map(idea => (
          <IdeaCard idea={idea} />
        ))}
      </Carousel>
    </div>
  );
};

export default IdeasList;
