import React from 'react';

import styles from './input.module.css';
import classNames from 'classnames';

interface IInput extends React.HTMLProps<HTMLInputElement> {
  extraClass?: string;
}

export const Input: React.FC<IInput> = ({ label, name, extraClass, ...rest }) => (
  <div className={styles.container}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <input {...rest} type='text' name={name} className={classNames(styles.input, extraClass)} />
  </div>
);
