import React from 'react';

import { useAppDispatch } from '../../hooks/typedHooks';
import { logout } from '../../store/authSlice';

import styles from './ButtonHeaderLogout.module.scss';

const ButtonHeaderLogout = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      className={styles.logoutButton}
      onClick={() => dispatch(logout())}
    >
      Logout
    </button>
  );
};
export default ButtonHeaderLogout;
