import React from 'react';
import ValidationErrorMessage from '../ValidationErrorMessage/ValidationErrorMessage';

import styles from './AuthFormInput.module.scss';

type Props = {
  label: string;
  name: string;
  type: string;
  onChange: (...event: any[]) => void;
  value: any;
  error?: string;
};

const AuthFormInput: React.FC<Props> = ({
  name, error, label, type, onChange, value,
}) => {
  const defineClasses = () => `${styles.input}${error ? ` ${styles.invalid}` : ''}`;

  return (
    <>
      <label htmlFor={name}>
        {label}
        <input
          className={defineClasses()}
          type={type}
          name={name}
          autoComplete="none"
          value={value}
          onChange={onChange}
        />
      </label>
      <ValidationErrorMessage message={error as string | undefined} />
    </>
  );
};

export default AuthFormInput;
