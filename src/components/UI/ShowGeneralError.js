import { Link, useNavigate } from 'react-router-dom';
import styles from './ShowGeneralError.module.css';

const ShowGeneralErrors = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.error}>
      <p>Sorry there has been an error. Please try again later.</p>
      <Link className={styles['error-link']} to="/">
        Home
      </Link>
    </div>
  );
};

export default ShowGeneralErrors;
