'use client';

import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './input.module.css';

interface IInput extends React.HTMLProps<HTMLInputElement> {
  extraClass?: string;
}

export const Input: React.FC<IInput> = ({ label, name, extraClass, ...rest }) => {
  const [isOpened, setOpened] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input {...rest} type='text' name={name} className={classNames(styles.input, extraClass)} />
    </div>
  );
};
