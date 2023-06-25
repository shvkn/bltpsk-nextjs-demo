'use client';

import classNames from 'classnames';
import React, { SyntheticEvent, useState } from 'react';

import { ArrowDownIcon } from '@/components/ui/icons/arrow-down-icon';
import { ArrowUpIcon } from '@/components/ui/icons/arrow-up-icon';

import styles from './text-block.module.css';

interface ITextBlockProps {
  question: string;
  answer: string;
}

export const TextBlock: React.FC<ITextBlockProps> = ({ question, answer }) => {
  const [isOpened, setOpened] = useState(false);

  const toggleOpened = (e: SyntheticEvent) => {
    setOpened((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <p className={styles.question}>{question}</p>
      <button className={classNames(styles.ddButton, 'hover')} onClick={toggleOpened}>
        {isOpened ? <ArrowUpIcon size='L' /> : <ArrowDownIcon size='L' />}
      </button>
      {isOpened && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};
