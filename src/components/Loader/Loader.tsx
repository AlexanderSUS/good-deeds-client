import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.modal}>
    <div className={styles.loader} />
  </div>
);

export default Loader;
