'use client';

import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/services/store';

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
