'use client';

import React, { SyntheticEvent, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import styles from './filter.module.css';

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
    const { value } = e.target as HTMLInputElement;
    router.push(pathname + '?' + createQueryString('name', value));
  };

  return (
    <div className={styles.filter}>
      <input type='text' onChange={handleChange} />
    </div>
  );
};

export default Filter;
