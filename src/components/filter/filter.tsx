'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { SyntheticEvent, useEffect, useState } from 'react';

import { Input } from '@/components/input/input';
import { Select } from '@/components/select/select';
import { moviesSelector, selectCinemas } from '@/services/selectors/movies';
import { useAppSelector } from '@/services/store';
import { Translations } from '@/shared/constants';

import styles from './filter.module.css';

export interface IFilterParameters {
  title: string;
  genre: string;
  cinema: string;
}

export const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const cinemas = useAppSelector(selectCinemas);
  // TODO
  const movies = useAppSelector(moviesSelector);

  const genres = Array.from(new Set(movies.data?.map(({ genre }) => genre))).map((genre) => ({
    value: Translations.Genres[genre],
    id: genre,
  }));

  const cinemasOptions =
    cinemas.data?.map((cinema) => ({
      id: cinema.id,
      value: cinema.name,
    })) || [];

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
  }, [filter.title, filter.cinema, filter.genre, router, pathname, searchParams, filter]);

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
      <Select
        name='genre'
        label='Жанр'
        placeholder='Выберите жанр'
        onChange={handleChange}
        onInput={handleChange}
        items={genres}
      />
      <Select
        name='cinema'
        label='Кинотеатр'
        placeholder='Выберите кинотеатр'
        onChange={handleChange}
        onInput={handleChange}
        items={cinemasOptions}
      />
    </div>
  );
};
