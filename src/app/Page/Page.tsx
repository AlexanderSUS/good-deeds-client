import React from 'react';

import styles from './Page.module.scss';

type Props = React.PropsWithChildren<{}>;

const Page: React.FC<Props> = ({ children }) => (
  <main className={styles.main}>{children}</main>
);

export default Page;
