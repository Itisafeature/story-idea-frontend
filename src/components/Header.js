import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <img src={logo} />
      <nav>
        <ul className={styles['nav-ul']}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/new-idea">New Idea</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
