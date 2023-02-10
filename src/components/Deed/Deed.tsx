import React, { FC, SyntheticEvent } from 'react';

import { useAppDispatch } from '../../hooks/typedHooks';
import { deleteDeed, updateDeed } from '../../store/deedsSlice';
import { GoodDeed } from '../../types/deed';

import styles from './Deed.module.scss';

type Props = {
  deed: GoodDeed;
};

const Deed: FC<Props> = ({ deed: { title, _id, isDone } }) => {
  const dispatch = useAppDispatch();

  const changeDeedStatus = (isChecked: boolean) => {
    dispatch(updateDeed({
      _id,
      title,
      isDone: isChecked,
    }));
  };

  const deleteGoodDeed = () => {
    dispatch(deleteDeed(_id));
  };

  return (
    <li className={styles.deed}>
      <input
        type="checkbox"
        className={styles.check}
        checked={isDone}
        onChange={({ currentTarget: { checked } }:
        SyntheticEvent<HTMLInputElement>) => changeDeedStatus(checked)}
      />
      <p className={[styles.deedTitle, isDone ? styles.lineThrough : ''].join(' ')}>{title}</p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={deleteGoodDeed}
      >
        Delete
      </button>
    </li>
  );
};

export default Deed;
