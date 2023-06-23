'use client';

import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import styles from './filter.module.css';
import { Input } from '@/components/input/input';

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [cinemaId, setCinemaId] = useState('');
  const [filter, setFilter] = useState({ title: '', genre: '', cinema: '' });
  useEffect(() => {
    console.log({ cinemaId });
  }, [cinemaId]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  /*useEffect(() => {
    let query = '';
    for (let [key, val] of Object.entries(filter)) {
      if (val.length > 0) {
        console.log({ key, val });
        query += createQueryString(key, val);
      }
    }
    if (query.length > 0) {
      router.push(pathname + '?' + query);
    }
  }, [filter.title, filter.cinema, filter.genre, filter, createQueryString, router, pathname]);*/

  const handleChange = (e: SyntheticEvent) => {
    // const { value, name } = e.target as HTMLInputElement;
    // setFilter({ ...filter, [name]: value });
  };

  return (
    <div className={styles.filter}>
      <Input
        name='name'
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
