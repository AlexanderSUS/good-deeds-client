import React from 'react';
import Page from '../../app/Page/Page';
import styles from './Register.module.scss';
import FormRegistration from '../../forms/FormRegistration';

const Register = () => (
  <Page>
    <h1 className={styles.heading}>Registration</h1>
    <FormRegistration />
  </Page>
);

export default Register;
