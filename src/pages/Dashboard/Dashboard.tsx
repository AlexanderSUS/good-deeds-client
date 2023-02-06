/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';

import Page from '../../app/Page/Page';
import Deed from '../../components/Deed/Deed';
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
        <ul className={styles.deedsList}>
          {deeds.map((deed) => (
            <Deed key={deed._id} deed={deed} />
          ))}
        </ul>
      </div>
    </Page>
  );
};
export default Dashboard;
