import React, { FC, HTMLProps } from 'react';

import styles from './FormStyledAuthentication.module.scss';

const FormStyledAuthentication: FC<HTMLProps<HTMLFormElement>> = ({ children, ...props }) => (
  <form className={styles.form} {...props}>
    {children}
  </form>
);

export default FormStyledAuthentication;
