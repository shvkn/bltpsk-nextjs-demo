'use client';

import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import styles from './filter.module.css';
import { Input } from '@/components/input/input';
import { log } from 'util';
import { Select } from '@/components/select/select';
import { useAppSelector } from '@/services/store';
import { selectCinemas } from '@/services/selectors/movies';
import { Translations } from '@/shared/constants';

interface IFilterParameters {
  title: string;
  genre: string;
  cinema: string;
}

const genres = [
  { value: Translations.Genres['comedy'], id: 'comedy' },
  { value: Translations.Genres['horror'], id: 'horror' },
  { value: Translations.Genres['action'], id: 'action' },
  { value: Translations.Genres['fantasy'], id: 'fantasy' },
];

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const cinemas = useAppSelector(selectCinemas);

  const cinemasOptions =
    cinemas.data?.map((cinema) => {
      return {
        id: cinema.id,
        value: cinema.name,
      };
    }) || [];

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

export default Filter;
