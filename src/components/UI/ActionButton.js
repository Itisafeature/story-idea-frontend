import styles from './ActionButton.module.css';

const ActionButton = props => {
  return (
    <button
      type={props.type}
      className={`${styles['action-btn']} ${
        props.widened ? styles.widened : ''
      }`}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
