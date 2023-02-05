import React from 'react';

import HeaderNavLink from '../../components/HeaderNavLink/HeaderNavLink';
import { Path } from '../../constants/common';
import { useAppSelector } from '../../hooks/typedHooks';
import { authSelector } from '../../store/authSlice';

import styles from './Header.module.scss';

const Header = () => {
  const { user } = useAppSelector(authSelector);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          {user ? (
            <>
              <li><HeaderNavLink to={Path.dashboard}>Dashboard</HeaderNavLink></li>
              <li><HeaderNavLink to={Path.friends}>Friends</HeaderNavLink></li>
              <li><HeaderNavLink to={Path.profile}>Profile</HeaderNavLink></li>
            </>
          ) : (
            <>
              <li><HeaderNavLink to="/">Home</HeaderNavLink></li>
              <li><HeaderNavLink to={Path.login}>Login</HeaderNavLink></li>
              <li><HeaderNavLink to={Path.register}>Registration</HeaderNavLink></li>

            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
