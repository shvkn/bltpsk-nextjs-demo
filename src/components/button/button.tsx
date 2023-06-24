import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';
import classNames from 'classnames';

interface IButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  type: 'primary' | 'secondary';
}

export const Button: React.FC<IButtonProps> = ({ type, value, ...rest }) => {
  return (
    <button
      type='button'
      {...rest}
      className={classNames(
        styles.button,
        {
          [`${styles.primary}`]: type === 'primary',
          [`${styles.secondary}`]: type === 'secondary',
        },
        'hover'
      )}
    >
      {value}
    </button>
  );
};
