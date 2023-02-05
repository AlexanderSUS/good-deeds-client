import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <a className={styles.link} href="https://github.com/AlexanderSUS">AlexanderSus</a>
    <span className={styles.span}>2023</span>
  </footer>
);

export default Footer;
