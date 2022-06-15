import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['welcome-card']}>
        <h1>Story Idea App</h1>
        <p>
          This app is designed for users to leave their story ideas. There is no
          login. It's an (relatively) anonymous way to put ideas down. You can
          also leave comments on ideas to expand on the idea or give feedback! I
          hope you will enjoy!
        </p>
        <h3>Get Started</h3>
        <ul className={styles['welcome-navigation']}>
          <li className={styles['welcome-navigation-item']}>
            <Link to="/new-idea">Create a New Idea</Link>
          </li>
          <li className={styles['welcome-navigation-item']}>
            <Link to="/ideas">See a list of Ideas</Link>
          </li>
          <li className={styles['welcome-navigation-item']}>
            <Link to="/most-recently-commented">
              Most Recently Commented on Ideas
            </Link>
          </li>
        </ul>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Welcome;
