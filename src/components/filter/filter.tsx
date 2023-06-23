'use client';

import React, { SyntheticEvent, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import styles from './filter.module.css';
import { Input } from '@/components/input/input';

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e: SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    router.push(pathname + '?' + createQueryString(name, value));
  };

  return (
    <div className={styles.filter}>
      <Input name='name' type='text' label='Название' placeholder='Введите название' onChange={handleChange} />
      <Input name='genre' type='dropdown' label='Жанр' placeholder='Выберите жанр' onChange={handleChange} />
      <Input name='cinema' type='dropdown' label='Кинотеатр' placeholder='Выберите кинотеатр' onChange={handleChange} />
    </div>
  );
};

export default Filter;
