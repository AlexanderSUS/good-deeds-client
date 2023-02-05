import React from 'react';
import Page from '../../components/Page/Page';
import FormLogin from '../../forms/FormLogin/FormLogin';
import styles from './Login.module.scss';

const Login = () => (
  <Page>
    <h1 className={styles.heading}>Login</h1>
    <FormLogin />
  </Page>
);

export default Login;
