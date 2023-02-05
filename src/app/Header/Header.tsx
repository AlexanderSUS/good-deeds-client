import React from 'react';
import HeaderNavLink from '../../components/HeaderNavLink/HeaderNavLink';
import { Path } from '../../constants/common';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li><HeaderNavLink to="/">Home</HeaderNavLink></li>
        <li><HeaderNavLink to={Path.login}>Login</HeaderNavLink></li>
        <li><HeaderNavLink to={Path.register}>Registration</HeaderNavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
