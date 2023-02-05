import React from 'react';

import styles from './ButtonSubmit.module.scss';

type Props = {
  value: string;
  style?: string;
  disabled?: boolean;
};

const ButtonSubmit: React.FC<Props> = ({ value, style, disabled }) => (
  <input className={`${styles.submit} ${style || ''}`} type="submit" value={value} disabled={disabled} />
);

export default ButtonSubmit;
