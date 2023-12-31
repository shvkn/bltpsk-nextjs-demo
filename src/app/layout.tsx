import './globals.css';

import classNames from 'classnames';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { StoreProvider } from '@/services/store-provider';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const sfProText = localFont({
  src: [
    {
      path: '../fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SFProText-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/SFProText-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/SFProText-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-text',
});

export const metadata = {
  title: 'Билетопоиск',
  description: 'Крупнейший сервис о кино в рунете',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={classNames(roboto.variable, sfProText.variable)}>
      <body>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
          <div id='dropdown'></div>
          <div id='modal'></div>
        </StoreProvider>
      </body>
    </html>
  );
}
