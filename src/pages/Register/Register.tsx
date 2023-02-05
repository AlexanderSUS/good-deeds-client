import React from 'react';
import Page from '../../components/Page/Page';
import styles from './Register.module.scss';
import FormRegistration from '../../forms/FormRegistration/FormRegistration';

const Register = () => (
  <Page>
    <h1 className={styles.heading}>Registration</h1>
    <FormRegistration />
  </Page>
);

export default Register;
