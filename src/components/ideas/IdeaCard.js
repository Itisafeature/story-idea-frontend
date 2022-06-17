import { Link } from 'react-router-dom';
import styles from './IdeaCard.module.css';

const IdeaCard = ({ idea }) => {
  return (
    <article className="idea-card">
      <Link
        to={`/ideas/${idea.id}`}
        className={styles['idea-card__link']}
        key={idea.id}
      >
        <h1>{idea.attributes.title}</h1>
        <p>{idea.attributes.truncated_content}</p>
      </Link>
    </article>
  );
};

export default IdeaCard;
