import React from 'react';

import styles from './ValidationErrorMessage.module.scss';

type Props = {
  message?: string;
};

const ValidationErrorMessage: React.FC<Props> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={styles.element}>
      {message}
    </div>
  );
};

export default ValidationErrorMessage;
