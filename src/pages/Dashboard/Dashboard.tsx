import React, { useEffect } from 'react';

import Page from '../../app/Page/Page';
import FormGoodDeed from '../../forms/FormCreateGoodDeed/FormCreateGoodDeed';
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks';
import { deedsSelector, getDeeds } from '../../store/deedsSlice';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { deeds } = useAppSelector(deedsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDeeds());
  }, [dispatch]);

  return (
    <Page>
      <div className={styles.wrapper}>
        <section className={styles.formWrapper}>
          <FormGoodDeed />
        </section>
        <ul>
          {deeds.map(({ isDone, title, _id }) => (
            <li key={_id}>
              <h3>{title}</h3>
              <p>
                Done:
                {isDone.toString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};
export default Dashboard;
