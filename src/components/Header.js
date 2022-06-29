import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <Link className={styles['img-link']} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles['nav-links']}>
          <li className={styles['nav-item']}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/new-idea"
              end
            >
              New Idea
            </NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/ideas"
              end
            >
              See Ideas
            </NavLink>
          </li>
          <li className={styles['nav-item']}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to="/most-recently-commented"
              end
            >
              Recently Commented
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
