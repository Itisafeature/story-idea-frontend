import styles from './IdeaCard.module.css';

const IdeaCard = ({ idea }) => {
  return (
    <div class={styles['idea-card']} key={idea.id}>
      <h1>{idea.attributes.title}</h1>
      <p>{idea.attributes.truncated_content}</p>
    </div>
  );
};

export default IdeaCard;
