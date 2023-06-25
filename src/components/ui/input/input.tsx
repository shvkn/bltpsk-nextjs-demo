'use client';

import classNames from 'classnames';
import React from 'react';

import styles from './input.module.css';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  extraClass?: string;
}

export const Input: React.FC<IInputProps> = ({ label, name, extraClass, ...rest }) => (
  <div className={styles.container}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <input {...rest} type='text' name={name} className={classNames(styles.input, extraClass)} />
  </div>
);
