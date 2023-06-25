import classNames from 'classnames';
import React from 'react';

import { useCounter } from '@/hooks/use-counter';

import styles from './counter.module.css';
import { MinusIcon } from '@/components/ui/icons/minus-icon';
import { PlusIcon } from '@/components/ui/icons/plus-icon';

interface ICounterProps {
  id: string;
}

export const Counter: React.FC<ICounterProps> = ({ id }) => {
  const { count = 0, increment, decrement } = useCounter({ id });
  return (
    <div className={styles.controls}>
      <button className={classNames(styles.button, 'hover')} disabled={count === 0} onClick={() => decrement()}>
        <MinusIcon size='S' />
      </button>
      <p className={styles.count}>{count}</p>
      <button className={classNames(styles.button, 'hover')} disabled={count === 30} onClick={() => increment()}>
        <PlusIcon size='S' />
      </button>
    </div>
  );
};
