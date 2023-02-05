import React from 'react';

import Page from '../../app/Page/Page';
import FormRegistration from '../../forms/FormRegistration';

import styles from './Register.module.scss';

const Register = () => (
  <Page>
    <h1 className={styles.heading}>Registration</h1>
    <FormRegistration />
  </Page>
);

export default Register;
