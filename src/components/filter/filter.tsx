'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { SyntheticEvent, useEffect, useState } from 'react';

import { Input } from '@/components/ui/input/input';
import { Select } from '@/components/ui/select/select';
import { useGetCinemasQuery } from '@/services/api/cinemas-api';
import { useGetMoviesQuery } from '@/services/movies-api';
import { Translations } from '@/shared/constants';
import { capitalize } from '@/shared/utils';

import styles from './filter.module.css';

interface IFilterParameters {
  title: string;
  genre: string;
  cinema: string;
}

export const Filter: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const { data: cinemas } = useGetCinemasQuery();
  const { data: movies } = useGetMoviesQuery();

  const genresOptions = Array.from(new Set(movies?.map(({ genre }) => genre))).map((genre) => ({
    value: capitalize(Translations.Genres[genre]),
    id: genre,
  }));

  const cinemasOptions =
    cinemas?.map((cinema) => ({
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
    <>
      <p className={styles.heading}>Фильтр поиска</p>
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
          items={genresOptions}
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
    </>
  );
};
