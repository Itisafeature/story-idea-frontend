import styles from './ShowErrors.module.css';

const ShowErrors = ({ errorMessage }) => {
  const renderErrors = () => {
    return Object.values(errorMessage).map((err, idx) => (
      <p key={idx} className={styles['error__item']}>
        {err}
      </p>
    ));
  };

  return <div className={styles.errors}>{renderErrors()}</div>;
};

export default ShowErrors;
