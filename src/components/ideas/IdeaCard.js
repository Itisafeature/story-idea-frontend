import { Link } from 'react-router-dom';
import styles from './IdeaCard.module.css';

const IdeaCard = ({ idea, classes }) => {
  return (
    <article
      className={`${styles['idea-card']} ${classes ? styles[classes] : ''}`}
    >
      <Link
        to={`/ideas/${idea.id}`}
        className={`${styles['idea-card__link']} ${
          classes ? styles[classes] : ''
        }`}
        key={idea.id}
      >
        <h1>{idea.attributes.title}</h1>
        <p>{idea.attributes.truncated_content}</p>
      </Link>
    </article>
  );
};

export default IdeaCard;
