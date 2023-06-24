'use client';

import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import styles from './filter.module.css';
import { Input } from '@/components/input/input';
import { log } from 'util';

interface IFilterParameters {
  title: string;
  genre: string;
  cinema: string;
}

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const [filter, setFilter] = useState<IFilterParameters>({ title: '', genre: '', cinema: '' });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    for (let [key, val] of Object.entries(filter)) {
      params.delete(key);
      if (val.length > 0) {
        params.set(key, val);
      }
    }
    router.push(pathname + '?' + params.toString());
  }, [filter.title, filter.cinema, filter.genre, router, pathname]);

  const handleChange = (e: SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className={styles.filter}>
      <Input
        name='title'
        value={filter.title}
        type='text'
        label='Название'
        placeholder='Введите название'
        onChange={handleChange}
      />
      <Input
        name='genre'
        value={filter.genre}
        type='dropdown'
        label='Жанр'
        placeholder='Выберите жанр'
        onChange={handleChange}
        onInput={handleChange}
      />
      <Input
        name='cinema'
        value={filter.cinema}
        type='dropdown'
        label='Кинотеатр'
        placeholder='Выберите кинотеатр'
        onChange={handleChange}
        onInput={handleChange}
      />
    </div>
  );
};

export default Filter;
