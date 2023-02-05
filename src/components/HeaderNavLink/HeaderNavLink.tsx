import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HeaderNavLink.module.scss';

type Props = {
  to: string;
  children: string | JSX.Element;
};

const HeaderNavLink: React.FC<Props> = ({ to, children }) => {
  const activeStyle = {
    color: '#9900FF',
  };

  return (
    <NavLink
      className={styles.link}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      to={to}
    >
      {children}
    </NavLink>

  );
};

export default HeaderNavLink;
