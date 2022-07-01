import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <Link className={styles['img-link']} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button className={styles['hamburger__icon']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
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
